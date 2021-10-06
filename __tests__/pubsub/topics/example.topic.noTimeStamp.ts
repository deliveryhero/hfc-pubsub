import Topic, { Payload as BasePayload } from '../../../src/topic';

/**
 * define your payload below
 * e.g.
 * ```typescript
 *     interface Payload extends BasePayload {
 *        id: number;
 *        action: string;
 *     }
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Payload extends BasePayload {
  data: string;
}

export default class ExampleTopicNoTimeStamp extends Topic {
  addTimeStamp = false;
  public readonly name = 'example.topic.no.timestamp';
}
