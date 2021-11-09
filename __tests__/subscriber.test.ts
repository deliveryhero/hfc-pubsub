import { Message } from '@honestfoodcompany/pubsub';
import { SubscriberV2 as Subscriber } from '../src/subscriber';

const mockMessage = Message.from('test message');
mockMessage.ack = jest.fn(() => new Message());

describe('Subscriber', () => {
  const subscriber = new Subscriber({
    handleMessage: (msg) => msg.ack(),
    topicName: 'test.topic',
    subscriptionName: 'test.topic.subscription',
  });
  it('should be a class', () => {
    expect(subscriber).toBeInstanceOf(Subscriber);
  });

  it('should contain handleMessage', () => {
    expect(subscriber).toHaveProperty('handleMessage');
  });

  it('should use handleMessage properly', async () => {
    await subscriber.handleMessage(mockMessage);
    expect(mockMessage.ack).toHaveBeenCalled();
  });
});
