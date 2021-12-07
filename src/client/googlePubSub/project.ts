import {
  PubSub as GooglePubSub,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
} from '@google-cloud/pubsub';
import { Resource } from '@google-cloud/resource';
import { CredentialBody } from 'google-auth-library';
import { Logger } from '../../service/logger';

/**
 * A project has a clients array and caches for subscriptions and topics.
 * The first client is the default client and is used for all topic/DLQ related operations.
 * The other clients are used to distribute subscriptions so that each client doesn't go over the max of 20 subs
 */
export interface Project {
  client: GooglePubSub;
  /**
   * @private
   */
  _clients: GooglePubSub[];
  topics: Map<GoogleCloudTopic['name'], GoogleCloudTopic>;
  /**
   * @private
   */
  _subscriptions: Map<GoogleCloudSubscription['name'], GoogleCloudSubscription>;
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
    _clients: [client],
    _subscriptions: new Map(),
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
