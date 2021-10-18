const { Topic } = require('@honestfoodcompany/pubsub');

class SimpleTopic extends Topic {
  static topicName = 'simple.topic.with-retry-settings';
}

exports.default = SimpleTopic;
