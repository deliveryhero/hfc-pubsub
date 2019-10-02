import BaseSubscription from "./base/subscription";
import { Message } from "@google-cloud/pubsub";
import { EscalationService } from "../../escalation/escalation.service";
import { Payload } from "../topics/ops-master.queue.escalation";
import { PopulatedEscalation as Escalation } from "../../escalation/escalation.model";
import { SlackService } from "../../slack/slack.service";
import { User } from "../../user/user.model";

export default class OpsMasterEscalationSubscriber extends BaseSubscription {
  public topicName: string = "ops-master.queue.escalation";
  public subscriptionName: string = "ops-master.queue.escalation.slack";
  public description: string =
    "This subscription will listen to new escalation events and relay them to slack.";
  protected escalationService: EscalationService = new EscalationService();
  protected creator: string = ""; // creator of escalation
  protected escalation: Escalation = new Escalation();
  public slack = new SlackService();

  public async handleMessage(message: Message): Promise<void> {
    try {
      const payload: Payload = JSON.parse(message.data.toString());
      await this.getEscalation(payload);
      if (!this.escalation) {
        return;
      }
      const escalationType = this.escalation.incident ? "incident" : "action";
      await this.notify(escalationType, this.escalation);
      message.ack();
    } catch (e) {
      console.log(e);
    }
  }
  protected async getEscalation(payload: Payload): Promise<Escalation | null> {
    this.escalation = (await this.escalationService.findOneById(
      payload.escalation._id.toString(),
    )) as Escalation;
    if (!this.escalation) return null;
    this.creator = this.getFullName(this.escalation.createdBy);
    return this.escalation;
  }
  protected getFullName(creator: User): string {
    return `${creator.name.first} ${creator.name.last}`;
  }
  protected async notify(
    escalationType: string,
    escalation: Escalation,
  ): Promise<void> {
    switch (escalationType) {
      case "incident":
        this.handleIncidentEscalation(escalation);
        break;
      case "action":
        this.handleActionEscalation(escalation);
        break;
      default:
        break;
    }
    await this.escalationService.setDelivered(this.escalation._id.toString());
  }
  protected async handleIncidentEscalation(
    escalation: Escalation,
  ): Promise<void> {
    escalation.channel.forEach((channel: string): void => {
      console.log(`posting slack message on ${channel}`);
      this.slack.postBlockMessage(
        channel,
        this.getIncidentMessage(),
        this.getDefaultText(),
      );
    });
  }
  protected getDefaultText(): string {
    const escalationReference = this.escalation.incident
      ? "incident"
      : "action";
    switch (escalationReference) {
      case "incident":
        return "An incident has been escalated via the Ops Master App";
      case "action":
        return "An action has been escalated via the Ops Master App";
    }
  }
  protected async handleActionEscalation(
    escalation: Escalation,
  ): Promise<void> {
    escalation.channel.forEach((channel: string): void => {
      console.log(`posting slack message on ${channel}`);
      this.slack.postBlockMessage(
        channel,
        this.getActionMessage(),
        this.getDefaultText(),
      );
    });
  }
  protected getActionMessage(): any[] {
    if (!this.escalation.action) {
      return [""];
    }
    return [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "The following action has been escalated via the Ops Master App:",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Escalation Summary by ${this.creator}:*\n${this.escalation.summary}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "*Action Type:*\nVisit\n",
          },
          {
            type: "mrkdwn",
            text: `*Outlet:*\n ${this.escalation.action.outlet.identifier}`,
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: this.getOpsMasterActionText(),
          },
        ],
      },
    ];
  }
  protected getOpsMasterActionText(): string {
    if (!this.escalation.action) {
      return "A link to this action could not be established.";
    } else {
      return `For more info, <https://ops.clubkitchen.at/action?actionId=${this.escalation.action._id}|open the action details in the Ops Master App>`;
    }
  }
  protected getIncidentMessage(): any[] {
    if (!this.escalation.incident) {
      return [""];
    }
    return [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "The following incident has been escalated via the Ops Master App:",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Escalation Summary by ${this.creator}:*\n ${this.escalation.summary}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Incident Description:*\n ${this.escalation.incident.description}`,
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Incident Category:*\n ${this.escalation.incident.category}\n`,
          },
          {
            type: "mrkdwn",
            text: `*Incident Type(s):*\n ${
              this.escalation.incident.type
                ? this.escalation.incident.type.join("\n")
                : ""
            }`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Outlet:*\n ${this.escalation.incident.outlet.identifier}`,
          },
          {
            type: "mrkdwn",
            text: `*Brand:*\n ${this.escalation.incident.brand}`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: this.getFreshDeskText(),
          },
          {
            type: "mrkdwn",
            text: this.getOrderNumberText(),
          },
        ],
      },
    ];
  }
  protected getFreshDeskText(): string {
    if (!this.escalation.incident || !this.escalation.incident.freshDeskId) {
      return `*Freshdesk Ticket:*\nN/A`;
    }
    return `*Freshdesk Ticket:*\n<https://honestfood.freshdesk.com/a/tickets/${this.escalation.incident.freshDeskId}|${this.escalation.incident.freshDeskId}>`;
  }
  protected getOrderNumberText(): string {
    if (!this.escalation.incident || !this.escalation.incident.order) {
      return `*Ordernumber:*\n N/A`;
    }
    return `*Ordernumber:*\n<https://tracker.clubkitchen.at/#/orders/${this.escalation.incident.order}|${this.escalation.incident.order}>`;
  }
}
