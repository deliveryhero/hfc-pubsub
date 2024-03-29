import { Message } from '@honestfoodcompany/pubsub';
import {
  generateMockMessage,
  generateMockCompressedMessage,
} from './helpers/generateMockMessage';

describe('@Message', () => {
  const message = new Message();

  it('should be a class', () => {
    expect(message).toBeInstanceOf(Message);
  });

  it('when synchronous driver is exposed, simply return a data object', () => {
    expect(message).toHaveProperty('data');
    expect(message).toHaveProperty('toJSON');
    expect(Object.keys(message)).toHaveLength(1);
  });

  it('should have keys applied for a message instantiation', async () => {
    const newGCloudMessage = await Message.fromGCloud(
      generateMockMessage('test data'),
    );
    expect(newGCloudMessage).toHaveProperty('data');
    expect(newGCloudMessage).toHaveProperty('gCloudMessage');
  });

  it('should decompress data if it is compressed with gzip', async () => {
    const msg = 'compressed test data';
    const newGCloudMessage = await Message.fromGCloud(
      generateMockCompressedMessage(msg),
    );

    const decompressSpy = jest.spyOn(newGCloudMessage, 'decompress');
    const json = newGCloudMessage.toJSON();
    expect(decompressSpy).toHaveBeenCalledTimes(1);

    expect(json).toEqual(msg);
  });
});
