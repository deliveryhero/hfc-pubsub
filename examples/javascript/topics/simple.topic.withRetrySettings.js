const { Topic } = require('@honestfoodcompany/pubsub');

class SimpleTopic extends Topic {
  constructor() {
    super();
    this.name = 'simple.topic.withRetrySettings';
  }
}

exports.default = SimpleTopic;

