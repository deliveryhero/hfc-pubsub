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
}
export const setLogger = (logger: LoggerOptions): void => {
  Logger.Instance = logger;
};
