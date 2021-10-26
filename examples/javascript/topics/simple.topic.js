const { Topic } = require('@honestfoodcompany/pubsub');

class SimpleTopic extends Topic {
  static topicName = 'simple.topic';
}

exports.default = SimpleTopic;
