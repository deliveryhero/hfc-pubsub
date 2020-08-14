import { Message } from '@honestfoodcompany/pubsub';
import { EventGlobalOrderDispatchedPayload as Payload } from '@honestfoodcompany/types';
import { SubscriberV2 } from '@honestfoodcompany/pubsub/dist/subscriber';

export default class TestSubscription extends SubscriberV2 {
  public metadata = {
    topicName: 'event.test.example',
    subscriptionName: 'event.test.example.subs',
    description: 'TEst subscriptions',
    options: {
      deadLetterPolicy: {
        topicName: 'example.test.deadletter',
        maxDeliveryAttempts: 6,
      },
      retryPolicy: {
        minimumBackoff: { seconds: 102, nanos: 2 },
        maximumBackoff: { seconds: 500 },
      },
    },
  };

  public async handleMessage(message: Message): Promise<void> {
    const payload: Payload = JSON.parse(message.data.toString());
    try {
      // Do some stuff here
      console.log(payload);
      return message.ack();
    } catch (e) {
      console.error(e);
      message.nack();
    }
  }
}
