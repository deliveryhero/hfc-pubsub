import Topic, { Payload } from "@hfc/pubsub";
import { Escalation as EscalationModel } from "../../escalation/escalation.model";

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
  escalation: EscalationModel;
}

export default class EscalationTopic extends Topic {
  public readonly name = "ops-master.queue.escalation";
}
