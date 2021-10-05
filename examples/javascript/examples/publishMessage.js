const SimpleTopic = require('../topics/simple.topic').default;

new SimpleTopic()
  .publish({ test: true, myData: 'hello world!' })
  .catch(console.error);
