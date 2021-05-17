import { Subscriber } from '../../../src/index';

export default class TestSubscription extends Subscriber {
  public static topicName = 'test-topic';
  public static subscriptionName = 'test-topic.subscription';
  public static description = 'Just a test subscription';
  public async handleMessage(message: any): Promise<void> {
    const payload = JSON.parse(message.data.toString());
    console.log(payload);
    message.ack();
  }
}
