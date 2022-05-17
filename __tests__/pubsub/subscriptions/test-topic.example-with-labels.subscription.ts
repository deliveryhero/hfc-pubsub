import { SubscriberObject } from '@honestfoodcompany/pubsub';
import { Payload } from '../topics/test-topic';

const TestSubscription: SubscriberObject<Payload> = {
  topicName: 'test-topic',
  subscriptionName: 'test-topic.example.subscription',
  description: 'Just a test subscription',

  options: {
    labels: {
      tribe: 'GFS',
      service: 'pubsub',
    },
  },

  async handleMessage(message): Promise<void> {
    const payload = message.toJSON();
    console.log(payload);
    message.ack();
  },
};

export default TestSubscription;
