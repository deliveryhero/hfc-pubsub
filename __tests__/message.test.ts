import { Message } from '@honestfoodcompany/pubsub';
import generateMockMessage from './helpers/generateMockMessage';

describe('@Message', () => {
  const message = new Message();
  it('should be a class', () => {
    expect(message).toBeInstanceOf(Message);
  });

  it('when synchronous driver is exposed, simply return a data object', () => {
    expect(message).toHaveProperty('data');
    expect(message).toHaveProperty('json');
    expect(Object.keys(message)).toHaveLength(2);
  });

  it('should have keys applied for a message instantiation', async () => {
    const newGCloudMessage = await Message.fromGCloud(
      generateMockMessage('test data'),
    );
    expect(newGCloudMessage).toHaveProperty('data');
    expect(newGCloudMessage).toHaveProperty('gCloudMessage');
  });
});
