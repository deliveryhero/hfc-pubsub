exports.default = {
    topicName: "simple.topic",
    subscriptionName: "simple.topic.console-log.subscriptionWithOptions",
    description: "Will console log messages published on test.topic",
    
    options: {
      flowControl: {
        maxMessages: 100,
      }
    },

    handleMessage: function (message) {
      console.log(this.subscriptionName, 'received message');
      console.log(message.data.toString());
      message.ack();
    },
  };
  