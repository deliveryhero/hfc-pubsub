/**
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */
const config = {
  title: 'Pub/Sub Node.js Framework',
  tagline:
    'NodeJS Framework to add pubsub topics/subscriptions to your service',
  customFields: {
    meta: {
      description:
        'NodeJS Framework to add pubsub topics/subscriptions to your service',
    },
  },
  url: process.env.CI
    ? 'https://deliveryhero.github.io'
    : 'http://localhost:3000', // Your website URL
  baseUrl: process.env.CI ? '/hfc-pubsub/' : '/', // Base URL for your project */
  favicon: 'img/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/',
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['./src/index.ts'],
        tsconfig: './tsconfig.build.json',
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Pub/Sub Node.js Framework',
      items: [
        {
          label: 'Docs',
          position: 'left',
          to: '/',
        },
        {
          label: 'API',
          to: '/api',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'HFC Logo',
        src: 'img/hfc.png',
      },
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/@honestfoodcompany/pubsub/',
            },
            {
              label: 'Github',
              href: 'https://github.com/deliveryhero/hfc-pubsub',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Honest Food Company',
              href: 'https://www.honestfoodcompany.de/',
            },
            {
              label: 'Delivery Hero',
              href: 'https://www.deliveryhero.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Delivery Hero HF Kitchens GmbH. Built with <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
  },
};

module.exports = config;
