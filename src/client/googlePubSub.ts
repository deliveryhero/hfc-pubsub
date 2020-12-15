/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import { Topic, Payload } from '../index';
import { AllSubscriptions, PubSubClientV2 } from '../interface/pubSubClient';
import {
  PubSub as GooglePubSub,
  Message as GoogleCloudMessage,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
} from '@google-cloud/pubsub';
import { SubscriberOptions } from '../subscriber/subscriberV2';
import { SubscriberTuple } from 'subscriber';
import Message from '../message';
import grpc from 'grpc';
import { GooglePubSubProject } from 'interface/GooglePubSubProject';
import { CredentialBody } from 'google-auth-library';
import Bluebird from 'bluebird';

/* eslint-disable @typescript-eslint/no-unused-vars */

export interface Project {
  client: GooglePubSub;
  topics: Map<GoogleCloudTopic['name'], GoogleCloudTopic>;
}
export interface Projects {
  [key: string]: Project;
}

export interface CreateClientOptions {
  credentials?: CredentialBody;
  grpc?: boolean;
}
export default class GooglePubSubAdapter implements PubSubClientV2 {
  protected static instance: GooglePubSubAdapter;
  protected projects: Projects = {};

  public constructor(client: GooglePubSub) {
    this.projects['default'] = {
      client,
      topics: new Map(),
    };
    this.createOrGetSubscription = this.createOrGetSubscription.bind(this);
  }

  public static getInstance(): GooglePubSubAdapter {
    if (!GooglePubSubAdapter.instance) {
      GooglePubSubAdapter.instance = new GooglePubSubAdapter(
        GooglePubSubAdapter.createClient(
          process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID || '',
          { grpc: process.env.PUBSUB_USE_GRPC === 'true' },
        ),
      );
    }
    return GooglePubSubAdapter.instance;
  }

  public static createClient(projectId: string, options?: CreateClientOptions) {
    return new GooglePubSub({
      grpc: options?.grpc ? (grpc as any) : undefined,
      projectId: projectId,
      credentials: options?.credentials,
    });
  }

  public async publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
  ): Promise<string> {
    const pubSubTopic = await this.createOrGetTopic(topic.getName(), {
      project: topic.project,
    });
    const messageId = await pubSubTopic.publish(
      Buffer.from(JSON.stringify(message)),
    );
    return messageId;
  }

  public async subscribe(subscriber: SubscriberTuple): Promise<void> {
    const [, metadata] = subscriber;
    const subscription = await this.createOrGetSubscription(subscriber);
    this.addHandler(subscriber, subscription);
    this.log(
      `   📭     ${metadata.subscriptionName} is ready to receive messages at a controlled volume of ${metadata.options?.flowControl?.maxMessages} messages.`,
    );
  }

  private addHandler(
    subscriber: SubscriberTuple,
    subscription: GoogleCloudSubscription,
  ): void {
    const [subscriberClass] = subscriber;
    subscription.on('message', (message: GoogleCloudMessage): void => {
      const subscriber = new subscriberClass();
      subscriber.init();
      subscriber.handleMessage(Message.fromGCloud(message)).catch(() => {
        message.nack();
      });
    });
  }

  private log(message: string): void {
    console.log(chalk.green.bold(message));
  }

  private getSubscriberOptions(
    subscriber: SubscriberTuple,
  ): SubscriberOptions | undefined {
    const [, metadata] = subscriber;
    return metadata.options;
  }

  /**
   * Create subscription if it does not exist yet.
   */
  private async createOrGetSubscription(
    subscriber: SubscriberTuple,
  ): Promise<GoogleCloudSubscription> {
    const [, metadata] = subscriber;
    const client = this.getProject(metadata.options).client;
    if (await this.subscriptionExists(metadata.subscriptionName, client)) {
      console.log(
        chalk.gray(`   ✔️      ${metadata.subscriptionName} already exists.`),
      );
      return this.getSubscription(subscriber);
    }

    const topic = await this.createOrGetTopic(
      metadata.topicName,
      metadata.options,
    );
    await this.createSubscription(topic, subscriber);

    return this.getSubscription(subscriber);
  }

  private async createSubscription(
    topic: GoogleCloudTopic,
    subscriber: SubscriberTuple,
  ): Promise<void> {
    const [, metadata] = subscriber;
    try {
      await topic.createSubscription(metadata.subscriptionName, {
        ...this.getSubscriberOptions(subscriber),
        ...(await this.mergeDeadLetterPolicy(
          this.getSubscriberOptions(subscriber),
        )),
      });
      console.log(
        chalk.gray(`   ✔️      ${metadata.subscriptionName} created.`),
      );
    } catch (e) {
      console.error('There was an error creating a subscription.', e);
    }
  }

  private async mergeDeadLetterPolicy(
    options: SubscriberOptions | undefined,
  ): Promise<SubscriberOptions | undefined> {
    if (!options) return;
    if (options.deadLetterPolicy) {
      return {
        ...options,
        deadLetterPolicy: {
          ...options.deadLetterPolicy,
          deadLetterTopic: await this.createDeadLetterTopic(
            options.deadLetterPolicy,
            options,
          ),
        },
      };
    }
    return;
  }

  private async createDeadLetterTopic(
    policy: NonNullable<SubscriberOptions['deadLetterPolicy']>,
    options?: SubscriberOptions,
  ): Promise<string> {
    const topic = await this.createOrGetTopic(policy.deadLetterTopic, options);
    return topic.name;
  }

  private getSubscription(
    subscriber: SubscriberTuple,
  ): GoogleCloudSubscription {
    const [, metadata] = subscriber;
    return this.getProject(metadata.options).client.subscription(
      metadata.subscriptionName,
      this.getSubscriberOptions(subscriber),
    );
  }

  private async subscriptionExists(
    subscriptionName: string,
    client: GooglePubSub,
  ): Promise<boolean> {
    const [subscriptionExists] = await client
      .subscription(subscriptionName)
      .exists();
    return subscriptionExists;
  }

  protected getProject(options?: { project?: GooglePubSubProject }): Project {
    if (!options) {
      return this.projects['default'];
    }
    if (this.projects[options.project?.id || '']) {
      return this.projects[options.project?.id || ''];
    } else {
      // init project with client
      return (this.projects[
        options.project?.id || ''
      ] = GooglePubSubAdapter.initProject(options.project?.id || '', {
        credentials: options?.project?.credentials,
        grpc: process.env.PUBSUB_USE_GRPC === 'true',
      }));
    }
  }

  protected static initProject(
    projectId: GooglePubSubProject['id'],
    options?: CreateClientOptions,
  ): Project {
    return {
      client: GooglePubSubAdapter.createClient(projectId, options),
      topics: new Map(),
    };
  }

  protected async createOrGetTopic(
    topicName: string,
    options?: { project?: GooglePubSubProject },
  ): Promise<GoogleCloudTopic> {
    const project = this.getProject(options);
    const cachedTopic = project.topics.get(topicName);

    if (cachedTopic) {
      return cachedTopic;
    }

    const pubSubTopic = project.client.topic(topicName);
    const [topic] = await pubSubTopic.get({ autoCreate: true });
    project.topics.set(topicName, topic);
    return topic;
  }

  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    const subscriptions = await Bluebird.map(
      Object.keys(this.projects),
      async project => {
        const [subscriptions] = await this.projects[
          project
        ].client.getSubscriptions();
        return subscriptions.map(({ metadata }) => {
          return {
            topicName: metadata?.topic,
            subscriptionName: metadata?.name || '',
          };
        });
      },
    );
    return subscriptions.flat();
  }
}
