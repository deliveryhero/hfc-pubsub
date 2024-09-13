import { CredentialBody } from 'google-auth-library';

export interface GooglePubSubProject {
  id: string;
  credentials?: CredentialBody;
}

export default GooglePubSubProject;
