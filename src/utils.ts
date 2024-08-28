import { SubscriptionMetadata } from '@google-cloud/pubsub';
import { Logger } from './service/logger';

export function getMergedLabels(options?: {
  labels?: SubscriptionMetadata['labels'];
}): Record<string, string> | undefined {
  const labels = options?.labels || {};
  try {
    const labelsStringified =
      process.env.GOOGLE_CLOUD_LABELS || process.env.PUBSUB_LABELS;
    if (labelsStringified) {
      const parsedLabels = JSON.parse(labelsStringified);
      Object.entries(parsedLabels).forEach(([key, val]) => {
        // Env var is only set if the label doesn't exist in options
        if (labels[key] == null) {
          labels[key] = String(val);
        }
      });
    }
  } catch (err) {
    Logger.Instance.warn(
      { err },
      `Invalid ${
        process.env.GOOGLE_CLOUD_LABELS
          ? 'GOOGLE_CLOUD_LABELS'
          : 'PUBSUB_LABELS'
      }, ignoring env var.`,
    );
  }

  if (Object.keys(labels).length === 0) {
    // Don't reset existing labels if no labels are set in options/env var
    return undefined;
  }
  return labels;
}
