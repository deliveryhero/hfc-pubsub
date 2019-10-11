require('dotenv').config({ path: require('find-config')('.env') });
import exampleTopic, { Payload } from './pubsub/topics/example.topic';


const mockPublish = jest.fn();
const mockTopic = jest.fn().mockImplementation(() => ({
  get: jest.fn(),
  publish: jest.fn(),
}));

jest.mock('../src/pubsub.service', () => ({
  default: class {
    public static getInstance() {
      return new this;
    }
    public publish() {
      return mockPublish();
    }
  }
}))
jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: jest.fn().mockImplementation(() => ({
    topic: mockTopic,
    publish: jest.fn(),
  })),
}));


describe('topics', () => {
    it('should publish to gcp pubsub', async() => {
      const topic = new exampleTopic;
      topic.publish<Payload>({data: "test"});
      expect(mockPublish.mock.calls.length).toBe(1);
    });
});