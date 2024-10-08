/**
 * Keeping all subscription crud related logic in one place
 */
import { CredentialBody } from 'google-auth-library';
import { Subscription as GoogleCloudSubscription } from '@google-cloud/pubsub';
import { SubscriberTuple } from '../../subscriber';
import { Project, createClient } from './project';

export function getSubscription(
  project: Project,
  subscriber: SubscriberTuple,
): GoogleCloudSubscription {
  const [, metadata] = subscriber;
  const { options } = metadata;
  const { client, _clients, _subscriptions: subscriptions } = project;
  if (subscriptions.has(metadata.subscriptionName)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return subscriptions.get(metadata.subscriptionName)!;
  }
  /**
   * NOTE: Each client can handle a max of 20 subs, but limiting to 15
   * @see https://jira.deliveryhero.com/browse/PUB-72
   *
   * > By default each PubSub instance can handle 100 open streams,
   * > with default options this translates to less than 20 Subscriptions per PubSub instance.
   * If you wish to create more Subscriptions than that,
   * you can either create multiple PubSub instances or
   * lower the options.streamingOptions.maxStreams value on each Subscription object
   * @see https://googleapis.dev/nodejs/pubsub/latest/Subscription.html
   */
  const isNewClientNeeded =
    Math.floor(subscriptions.size / 15) > _clients.length - 1;

  if (isNewClientNeeded) {
    const newClient = createClient(client.projectId, {
      credentials: client.options.credentials as CredentialBody,
    });
    _clients.push(newClient);
  }

  const latestClient = _clients[_clients.length - 1];
  const subscription = latestClient.subscription(
    metadata.subscriptionName,
    options,
  );

  subscriptions.set(metadata.subscriptionName, subscription);
  return subscription;
}

/**
 * @returns If sub was closed or not. Will return false if already closed
 */
export async function closeSubscription(
  project: Project,
  subscriber: SubscriberTuple,
): Promise<boolean> {
  const [, metadata] = subscriber;
  const { _subscriptions: subscriptions } = project;
  const subscription = subscriptions.get(metadata.subscriptionName);
  if (!subscription) {
    return false;
  }
  await subscription.close();
  subscription.removeAllListeners();
  subscriptions.delete(metadata.subscriptionName);
  return true;
}

export function getAllSubscriptions(
  project: Project,
): GoogleCloudSubscription[] {
  return Array.from(project._subscriptions.values());
}
