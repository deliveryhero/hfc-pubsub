import CompressionTopic from '../topics/compression.topic';

// Run with: npx  ts-node -r tsconfig-paths/register examples/typescript/scripts/compress-publish.ts

const main = async () => {
  const topic = new CompressionTopic();
  const messageId = await topic.publish({ testPayload: 'test' });
  console.log('messageId', messageId);
};

if (require.main === module) {
  void main();
}
