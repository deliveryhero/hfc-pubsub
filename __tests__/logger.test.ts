import { Logger } from '../src/service/logger';

describe('Tests Logger singleton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Should return default Logger instance if not provided anything', () => {
    expect(Logger.Instance).toBeTruthy();
  });
  it("Should return what's passed in", () => {
    const customLogger = { info: jest.fn() } as any;
    Logger.Instance = customLogger;
    expect(Logger.Instance).toEqual(customLogger);
  });
  it('Should return latest logger passed in', () => {
    const customLogger = { info: jest.fn() } as any;
    const customLogger1 = { info: jest.fn() } as any;
    Logger.Instance = customLogger;
    Logger.Instance = customLogger1;
    expect(Logger.Instance).toEqual(customLogger1);
  });
});
