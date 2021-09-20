import SubscriberV2, {
  SubscriberMetadata,
  SubscriberObject,
  SubscriberOptions,
} from './subscriberV2';

export default SubscriberV2;

export type SubscriberTuple = [typeof SubscriberV2, SubscriberMetadata];
export type Subscribers = SubscriberTuple[];

export { SubscriberOptions, SubscriberObject, SubscriberV2 };
