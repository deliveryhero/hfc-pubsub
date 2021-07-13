import Message from '../src/message';
import generateMockMessage from './helpers/generateMockMessage';

describe('message', () => {
  const message = new Message();
  it('should be a class', () => {
    expect(message).toBeInstanceOf(Message);
  });

  it('When synchronous driver is exposed, simply return a data object', () => {
    expect(message).toHaveProperty('data');
    expect(Object.keys(message)).toHaveLength(1);
  });
  it('should have keys applied for a message instantiation', async () => {
    const newGCloudMessage = await Message.fromGCloud(
      generateMockMessage('test data'),
    );
    expect(newGCloudMessage).toHaveProperty('data');
    expect(newGCloudMessage).toHaveProperty('gCloudMessage');
  });
});
