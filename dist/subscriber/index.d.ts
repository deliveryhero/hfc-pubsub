import subscriberV1 from './subscriber';
import subscriberV2, { SubscriberMetadata, SubscriberObject as subscriberObject, SubscriberOptions } from './subscriberV2';
export default subscriberV1;
export declare const SubscriberV1: typeof subscriberV1;
export declare type SubscriberTuple = [typeof subscriberV2, SubscriberMetadata];
export declare type Subscribers = SubscriberTuple[];
export declare type SubscriberObject = subscriberObject;
export { SubscriberOptions };
export declare const SubscriberV2: typeof subscriberV2;
