/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * @see https://github.com/atlassian/changesets/issues/538#issuecomment-799528504
 * @see https://github.com/atlassian/changesets/blob/c426035565cfac518238c8bf32f3c496c66c0657/packages/changelog-github/src/index.ts
 */
const { config } = require('dotenv');
const {
  getInfo,
  getInfoFromPullRequest,
} = require('@changesets/get-github-info');

config();

/**
 * @type {import("@changesets/types").ChangelogFunctions}
 */
const changelogFunctions = {
  getDependencyReleaseLine: async (
    changesets,
    dependenciesUpdated,
    options,
  ) => {
    if (!options.repo) {
      throw new Error(
        'Please provide a repo to this changelog generator like this:\n"changelog": ["@changesets/changelog-github", { "repo": "org/repo" }]',
      );
    }
    if (dependenciesUpdated.length === 0) return '';

    const changesetLink = `- Updated dependencies [${(
      await Promise.all(
        changesets.map(async (cs) => {
          if (cs.commit) {
            const { links } = await getInfo({
              repo: options.repo,
              commit: cs.commit,
            });
            return links.commit;
          }
          return null;
        }),
      )
    )
      .filter((_) => _)
      .join(', ')}]:`;

    const updatedDepenenciesList = dependenciesUpdated.map(
      (dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
    );

    return [changesetLink, ...updatedDepenenciesList].join('\n');
  },
  getReleaseLine: async (changeset, type, options) => {
    if (!options || !options.repo) {
      throw new Error(
        'Please provide a repo to this changelog generator like this:\n"changelog": ["@changesets/changelog-github", { "repo": "org/repo" }]',
      );
    }
    let prFromSummary;
    let commitFromSummary;
    const jirasFromSummary = [];
    const usersFromSummary = [];

    const replacedChangelog = changeset.summary
      .replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/im, (_, pr) => {
        const num = Number(pr);
        if (!Number.isNaN(num)) prFromSummary = num;
        return '';
      })
      .replace(/^\s*commit:\s*([^\s]+)/im, (_, commit) => {
        commitFromSummary = commit;
        return '';
      })
      .replace(/^\s*(?:author|user):\s*@?([^\s]+)/gim, (_, user) => {
        usersFromSummary.push(user);
        return '';
      })
      .replace(/\s*-?\s*([A-Z]+-[0-9]+)\s*/m, (_, jira) => {
        jirasFromSummary.push(jira);
        return '';
      })
      .trim();

    const [firstLine, ...futureLines] = replacedChangelog
      .split('\n')
      .map((l) => l.trimRight());

    const links = await (async () => {
      const jiras =
        jirasFromSummary
          .map((jira) => {
            if (!options.jiraUrl) return jira;
            return `[${jira}](${options.jiraUrl}/browse/${jira})`;
          })
          .join(', ') || null;
      if (prFromSummary !== undefined) {
        const { links: prLinks } = await getInfoFromPullRequest({
          repo: options.repo,
          pull: prFromSummary,
        });
        if (commitFromSummary) {
          return {
            ...prLinks,
            jiras,
            commit: `[\`${commitFromSummary}\`](https://github.com/${options.repo}/commit/${commitFromSummary})`,
          };
        }
        return {
          ...prLinks,
          jiras,
        };
      }
      const commitToFetchFrom = commitFromSummary || changeset.commit;
      if (commitToFetchFrom) {
        const { links: commitLinks } = await getInfo({
          repo: options.repo,
          commit: commitToFetchFrom,
        });
        return { ...commitLinks, jiras };
      }
      return {
        commit: null,
        pull: null,
        user: null,
        jiras,
      };
    })();

    const users = usersFromSummary.length
      ? usersFromSummary
          .map(
            (userFromSummary) =>
              `[@${userFromSummary}](https://github.com/${userFromSummary})`,
          )
          .join(', ')
      : links.user;

    const prefix = [
      links.jiras === null ? '' : ` ${links.jiras}`,
      // links.commit === null ? '' : ` ${links.commit}`
    ].join('');

    const suffix = [
      links.pull === null ? '' : `${links.pull}`,
      users === null ? '' : ` by ${users}`,
    ].join('');

    return `\n\n-${prefix ? `${prefix} -` : ''} ${firstLine}${
      suffix ? ` (${suffix})` : ''
    }\n${futureLines.map((l) => `  ${l}`).join('\n')}`;
  },
};

module.exports = {
  ...changelogFunctions,
  default: changelogFunctions,
};
