import type { SubscriberMetadata } from '../subscriber';
import type { default as Message } from '../message';

export interface LoggerOptions {
  info: (...args: any[]) => void;
  debug?: (...args: any[]) => void;
  error: (...args: any[]) => void;
  warn: (...args: any[]) => void;
}

export class Logger {
  private static logger: LoggerOptions;
  public static set Instance(logger: LoggerOptions) {
    Logger.logger = logger;
  }
  public static get Instance(): LoggerOptions {
    return Logger.logger ?? console;
  }

  public static getInfo(
    metadata: SubscriberMetadata,
    message?: Message<unknown>,
  ): {
    pubsub: Record<string, unknown>;
  } {
    const { topicName, subscriptionName } = metadata ?? {};

    let pubsub: Record<string, unknown> = {
      topicName,
      subscriptionName,
    };

    if (message?.gCloudMessage) {
      pubsub = {
        ...pubsub,
        messageId: message.gCloudMessage.id,
        publishTime: message.gCloudMessage.publishTime,
        deliveryAttempt: message.gCloudMessage.deliveryAttempt,
      };
    }

    return {
      pubsub,
    };
  }
}

export const setLogger = (logger: LoggerOptions): void => {
  Logger.Instance = logger;
};
