import Message from '../src/message';
import generateMockMessage from './helpers/generateMockMessage';

describe('message', () => {
  const message = new Message();
  it('should be a class', done => {
    expect(message).toBeInstanceOf(Message);
    done();
  });

  it('When synchronous driver is exposed, simply return a data object', done => {
    expect(message).toHaveProperty('data');
    expect(Object.keys(message)).toHaveLength(1);
    done();
  });
  it('should have keys applied for a message instantiation', async done => {
    const newGCloudMessage = await Message.fromGCloud(
      generateMockMessage('test data'),
    );
    expect(newGCloudMessage).toHaveProperty('data');
    expect(newGCloudMessage).toHaveProperty('gCloudMessage');
    done();
  });
});
