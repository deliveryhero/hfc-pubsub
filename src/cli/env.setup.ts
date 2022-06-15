const envMapping: any = {
  projectId: 'GOOGLE_CLOUD_PROJECT',
  googleApplicationCredentials: 'GOOGLE_APPLICATION_CREDENTIALS',
  rootDir: 'PUBSUB_ROOT_DIR',
  labels: 'GOOGLE_CLOUD_LABELS',
  driver: 'PUBSUB_DRIVER',
  healthServer: 'PUBSUB_HEALTH_SERVER',
  serverPort: 'PUBSUB_SERVER_PORT',
};

export const setEnvFromArgs = (_args: { [key: string]: any }): void => {
  Object.keys(_args).forEach((key) => {
    if (envMapping.hasOwnProperty(key)) {
      process.env[envMapping[key]] = _args[key];
    }
  });
};
