import subscriberV1 from './subscriber';
import subscriberV2, { SubscriberMetadata } from './subscriberV2';

export default subscriberV2;
export const SubscriberV1 = subscriberV1;
export type SubscriberTuple = [typeof subscriberV2, SubscriberMetadata];
export type Subscribers = SubscriberTuple[];
export const SubscriberV2 = subscriberV2;
