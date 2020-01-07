require('dotenv').config({ path: require('find-config')('.env') });
import PubSubService from '../src/service/pubsub';
import exampleTopic, { Payload } from './pubsub/topics/example.topic';

const mockPublish = jest.fn();

jest.mock('../src/service/pubsub', (): any => ({
  __esModule: true,
  default: class {
    public static getInstance(): any {
      return new this();
    }
    public publish(): any {
      return mockPublish();
    }
  },
}));

describe('topics', (): void => {
  it('should publish to pubsub', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService, 'getInstance');
    const topic = new exampleTopic();
    topic.publish<Payload>({ data: 'test' });
    expect(spy).toBeCalledTimes(1);
    expect(mockPublish).toBeCalledTimes(1);
  });
});
