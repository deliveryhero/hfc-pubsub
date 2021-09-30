import { SubscriberObject } from '@honestfoodcompany/pubsub';

const TestSubscription: SubscriberObject = {
  topicName: 'test-topic',
  subscriptionName: 'test-topic.example.subscription',
  description: 'Just a test subscription',
  async handleMessage(message: any): Promise<void> {
    const payload = JSON.parse(message.data.toString());
    console.log(payload);
    message.ack();
  },
};

export default TestSubscription;
