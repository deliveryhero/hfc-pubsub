import { Topic } from '@google-cloud/pubsub';
import { Logger } from '../../service/logger';
import { SubscriberMetadata } from '../../subscriber';
import { getNameFromResourceName } from '../../utils';
import { getProjectNumber, Project } from './project';

export async function bindPolicyToSubscriber(
  metadata: SubscriberMetadata,
  project: Project,
): Promise<void> {
  const { topicName: subscriptionTopicName, subscriptionName } = metadata;
  const projectNumber = await getProjectNumber(project);

  if (!projectNumber) {
    Logger.Instance.warn(
      Logger.getInfo(metadata),
      `   ❌      Could not bind policy for subscriber due to no project number`,
    );
    return;
  }

  try {
    const pubSubTopic = project.client.topic(subscriptionTopicName);
    const myPolicy = {
      bindings: [
        {
          role: 'roles/pubsub.subscriber',
          members: [
            `serviceAccount:service-${projectNumber}@gcp-sa-pubsub.iam.gserviceaccount.com`,
          ],
        },
      ],
    };
    await pubSubTopic.subscription(subscriptionName).iam.setPolicy(myPolicy);
  } catch (err) {
    Logger.Instance.error(
      { ...Logger.getInfo(metadata), err },
      `   ❌      Error while binding policy for subscription`,
    );
  }
}

export async function bindPolicyToDeadLetterTopic(
  dlqTopic: Topic,
  metadata: SubscriberMetadata,
  project: Project,
): Promise<void> {
  const dlqTopicName = getNameFromResourceName(dlqTopic.name);
  const projectNumber = await getProjectNumber(project);
  if (!projectNumber) {
    Logger.Instance.warn(
      Logger.getInfo(metadata),
      `   ❌      Could not bind policy for DLQ topic due to no project number, "${dlqTopicName}"`,
    );
    return;
  }

  try {
    const myPolicy = {
      bindings: [
        {
          role: 'roles/pubsub.publisher',
          members: [
            `serviceAccount:service-${projectNumber}@gcp-sa-pubsub.iam.gserviceaccount.com`,
          ],
        },
      ],
    };
    await dlqTopic.iam.setPolicy(myPolicy);
  } catch (err) {
    Logger.Instance.error(
      { ...Logger.getInfo(metadata), err },
      `   ❌      Error while binding policy for DLQ topic, "${dlqTopicName}"`,
    );
  }
}

export async function checkDeadLetterConfiguration(
  dlqTopic: Topic,
  metadata: SubscriberMetadata,
): Promise<void> {
  const [subscriptions] = await dlqTopic.getSubscriptions();

  if (subscriptions.length === 0) {
    Logger.Instance.warn(
      Logger.getInfo(metadata),
      `Please set 'createDefaultSubscription: true' in deadLetterPolicy to create default subscriber for dead letter topic (${getNameFromResourceName(
        dlqTopic.name,
      )}) of ${
        metadata.subscriptionName
      }. Ignore if already added subscription for it.`,
    );
  }
}

export async function createDeadLetterDefaultSubscriber(
  dlqTopic: Topic,
  metadata: SubscriberMetadata,
  project: Project,
): Promise<void> {
  try {
    const { client } = project;
    const defaultSubscriberName =
      getNameFromResourceName(dlqTopic.name) + '.default';
    const [defaultSubscriberExists] = await client
      .subscription(defaultSubscriberName)
      .exists();

    if (defaultSubscriberExists) {
      // TODO: update metadata
      return;
    }

    await dlqTopic.createSubscription(defaultSubscriberName, {
      // DLQ subs's labels are same as subscription
      labels: metadata.options.labels,
      expirationPolicy: {
        ttl: null,
      },
    });
  } catch (err) {
    Logger.Instance.error(
      { ...Logger.getInfo(metadata), err },
      `   ❌      Error while creating default deadLetter subscription`,
    );
  }
}
