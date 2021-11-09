const {
  SubscriptionService: BaseSubscriptionService,
} = require('@honestfoodcompany/pubsub');
const ExampleSubscriber =
  require('./subscriptions/simple.topic.console-log.subscription-with-options').default;

class SubscriptionService extends BaseSubscriptionService {
  /**
   * you can manually load subscribers in the array below.
   * subscribers in PUBSUB_ROOT_DIR/subscriptions with a .sub.js prefix will be autoloaded
   * */
  static subscribers = [ExampleSubscriber];

  /**
   * connect to a database here
   */
  static init = async () => {
    console.log('Connecting to Database');
    // connect to database here
  };
}

exports.default = SubscriptionService;
