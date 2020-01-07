declare const _default: {
    start: {
        command: string;
        desc: string;
        handler: (argv: any) => Promise<void>;
    };
    list: {
        command: string;
        desc: string;
        handler: () => Promise<void>;
    };
};
export default _default;
