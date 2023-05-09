import { PreciseDate } from '@google-cloud/precise-date';
import Pako from 'pako';

/**
 * Generates a mock message for use in testing
 * @param {object} message
 */
export function generateMockMessage(message: any): any {
  return {
    ackId: 'RUFeQBJMJAxESVMrQwsqWBFOBCEhPjA',
    attributes: { key: 'value' },
    data: Buffer.from(JSON.stringify(message)),
    id: '1551297743043',
    orderingKey: 'ordering-key',
    publishTime: new PreciseDate('2019-02-27T20:02:19.029534186Z'),
    received: 1551297743043,
    length: 13,
    ack: () => {
      // we no-op this to fit the parameters of the expected function
    },
  };
}

export function generateMockCompressedMessage(message: any): any {
  const data = Buffer.from(Pako.gzip(JSON.stringify(message)));

  return {
    ackId: 'RUFeQBJMJAxESVMrQwsqWBFOBCEhPjB',
    attributes: { key: 'value' },
    data,
    id: '1551297743043',
    orderingKey: 'ordering-key',
    publishTime: new PreciseDate('2019-02-27T20:02:19.029534186Z'),
    received: 1551297743043,
    length: data.byteLength,
    ack: () => {
      // we no-op this to fit the parameters of the expected function
    },
  };
}
