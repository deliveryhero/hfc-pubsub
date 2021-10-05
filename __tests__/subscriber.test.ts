import { Subscriber, Message } from '@honestfoodcompany/pubsub';

Message.from('test message');
const mockMessage = jest.fn(() => new Message());

describe('message', () => {
  const subscriber = new Subscriber();
  it('should be a class', () => {
    expect(subscriber).toBeInstanceOf(Subscriber);
  });

  it('should contain handleMessage', () => {
    expect(subscriber).toHaveProperty('handleMessage');
  });

  it('should use handleMessage properly', async () => {
    await subscriber.handleMessage(mockMessage());
    expect(mockMessage).toHaveBeenCalled();
  });
});
