const { Topic } = require('@honestfoodcompany/pubsub');

class SimpleTopic extends Topic {
  constructor() {
    super();
    this.name = 'simple.topic.with-retry-settings';
  }
}

exports.default = SimpleTopic;
