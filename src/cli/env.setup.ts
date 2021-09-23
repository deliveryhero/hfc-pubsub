const envMapping: any = {
  projectId: 'GOOGLE_CLOUD_PUB_SUB_PROJECT_ID',
  rootDir: 'PUBSUB_ROOT_DIR',
  projectNumber: 'PROJECT_NUMBER',
  driver: 'PUBSUB_DRIVER',
  googleApplicationCredentials: 'GOOGLE_APPLICATION_CREDENTIALS',
  runHealthServer: 'RUN_HEALTH_SERVER',
  pubsubServerPort: 'PUBSUB_SERVER_PORT',
};

export const setEnvFromArgs = (_args: { [key: string]: any }): void => {
  Object.keys(_args).forEach((key) => {
    if (envMapping.hasOwnProperty(key)) {
      process.env[envMapping[key]] = _args[key];
    }
  });
};
