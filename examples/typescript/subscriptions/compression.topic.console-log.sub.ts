import { SubscriberObject, isGzipCompressed } from '@honestfoodcompany/pubsub'; // this import is optional, it's provides the interfaces to use below
interface Payload {
  testPayload: string;
}

const subscriber: SubscriberObject<Payload> = {
  topicName: 'compression.topic',
  subscriptionName: 'compression.topic.console-log.subscription',
  description: 'Will console log messages published on compression.topic',

  handleMessage: (message) => {
    console.log('is compressed', isGzipCompressed(message.data));

    console.log(message.toJSON(), typeof message.toJSON());
    const x = message.toJSON();
    console.log(x?.testPayload);
    message.ack();
  },
};

export default subscriber;
