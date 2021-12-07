import {
  PubSub as GooglePubSub,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
} from '@google-cloud/pubsub';
import { Resource } from '@google-cloud/resource';
import { CredentialBody } from 'google-auth-library';
import { Logger } from '../../service/logger';

export interface Project {
  client: GooglePubSub;
  topics: Map<GoogleCloudTopic['name'], GoogleCloudTopic>;
  subscriptions: Map<GoogleCloudSubscription['name'], GoogleCloudSubscription>;
  projectId: string;
  projectNumber?: string;
  credentials?: CredentialBody;
}

export interface Projects {
  [key: string]: Project;
}

export interface CreateClientOptions {
  credentials?: CredentialBody;
}

export function createClient(
  projectId?: string,
  options?: CreateClientOptions,
): GooglePubSub {
  return new GooglePubSub({
    projectId: projectId,
    credentials: options?.credentials,
  });
}

export function createProject(
  projectId?: string,
  options?: CreateClientOptions,
): Project {
  const client = createClient(projectId, options);
  return {
    client,
    projectId: client.projectId,
    topics: new Map(),
    subscriptions: new Map(),
  };
}

/**
 * FIXME: PUB-80 @google-cloud/resource has been deprecated. Migrate to https://www.npmjs.com/package/@google-cloud/resource-manager
 */
export async function getProjectNumber(
  project: Project,
): Promise<string | null> {
  if (project.projectNumber) {
    return project.projectNumber;
  }

  try {
    const resource = new Resource();
    const projectResource = resource.project(project.projectId);
    const projectInfo = await projectResource.get();
    // project.info return [_, projectInfoIncludingProjectNumber]
    project.projectNumber = (projectInfo as any)[1]?.projectNumber;
    return project.projectNumber || null;
  } catch (err) {
    Logger.Instance.error({ err }, 'Error while getting project number');
    return null;
  }
}
