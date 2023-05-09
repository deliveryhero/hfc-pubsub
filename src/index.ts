require('dotenv').config({ path: require('find-config')('.env') });
import Topic, { Payload, TopicOptions } from './topic';
import {
  SubscriberObject,
  SubscriberMetadata,
  SubscriberOptions,
} from './subscriber';
import SubscriptionService from './service/subscription';
import PubSubService from './service/pubsub';
import { setLogger } from './service/logger';
import Message from './message';

import { isGzipCompressed } from './message/gzip';

export {
  SubscriberObject,
  SubscriberMetadata,
  SubscriberOptions,
  Topic,
  TopicOptions,
  Payload,
  Message,
  PubSubService,
  SubscriptionService,
  setLogger,
  isGzipCompressed,
};
