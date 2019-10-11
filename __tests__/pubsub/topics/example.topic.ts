import { Topic, Payload as BasePayload } from "../../../src";

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

export default class ExampleTopic extends Topic {
  public readonly name = "example-topic";
}
