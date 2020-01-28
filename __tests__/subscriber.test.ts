import Subscriber from '../src/subscriber';
import Message from '../src/message';

Message.from('test message');
const mockMessage = jest.fn(() => new Message());

describe('message', () => {
  const subscriber = new Subscriber();
  it('should be a class', done => {
    expect(subscriber).toBeInstanceOf(Subscriber);
    done();
  });

  it('should contain handleMessage', done => {
    expect(subscriber).toHaveProperty('handleMessage');
    done();
  });

  it('should use handleMessage properly', async done => {
    await subscriber.handleMessage(mockMessage());
    expect(mockMessage).toHaveBeenCalled();
    done();
  });
});
