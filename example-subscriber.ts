import Message from './src/message/index';

// pubsub message handler example
export const subscriber = {
  config: {
    topicName: 'example.topic.name',
    subscriptionName: 'example.subscription',
    timeout: 1000,
    ackDeadlineSeconds: 10,
    maxMessages: 10,
  },
  handleMessage: (message: Message): void => {
    const payload = JSON.parse(message.data.toString());
    console.log(payload);
    return payload;
  },
};
export default subscriber;

// pubsub / pubsub.service.ts
// pubsub / topics  /  topic_a
// pubsub / topics  /  topic_b
// pubsub / subscribers / subscriber_1
// pubsub / subscribers / subscriber_2
