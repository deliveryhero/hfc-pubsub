import Topic, { Payload as BasePayload } from "@hfc/pubsub";
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

}

export default class {{topicClassName}} extends Topic {
  public readonly name = "{{topicName}}";
}
