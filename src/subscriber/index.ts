import subscriberV1 from './subscriber';
import subscriberV2, {
  SubscriberMetadata,
  SubscriberObject as subscriberObject,
  SubscriberOptions,
} from './subscriberV2';

export default subscriberV1;
export const SubscriberV1 = subscriberV1;
export type SubscriberTuple = [typeof subscriberV2, SubscriberMetadata];
export type Subscribers = SubscriberTuple[];
export type SubscriberObject = subscriberObject;
export { SubscriberOptions };
export const SubscriberV2 = subscriberV2;
