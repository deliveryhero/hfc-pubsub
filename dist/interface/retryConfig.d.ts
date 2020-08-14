export declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export declare type RetryCodesAllowed = 10 | 1 | 4 | 13 | 8 | 14 | 2;
export interface RetryConfig {
    retryCodes: RetryCodesAllowed[];
    backoffSettings: BackoffSettings;
}
export interface BackoffSettings {
    initialRetryDelayMillis: number;
    retryDelayMultiplier: number;
    maxRetryDelayMillis: number;
    initialRpcTimeoutMillis: number;
    rpcTimeoutMultiplier: number;
    maxRpcTimeoutMillis: number;
    totalTimeoutMillis: number;
}
