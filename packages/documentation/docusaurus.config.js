/** @type {import('@docusaurus/types').DocusaurusConfig} */

const customFields = {
  githubUrl: `https://github.com/polywrap/monorepo`,
  discordUrl: `https://discord.gg/Z5m88a5qWu`,
  handbookUrl: `https://handbook.polywrap.io`,
  twitterUrl: 'https://twitter.com/polywrap_io',
  forumUrl: 'https://forum.polywrap.io',
  daoUrl: 'https://snapshot.org/#/polywrap.eth',
  blogUrl: 'https://blog.polywrap.io/',
};

module.exports = {
  title: 'Polywrap (Origin)',
  tagline: 'The Universal Web3 Integration Standard',
  url: 'https://docs.polywrap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'polywrap',
  projectName: 'documentation',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-160302501-1',
      anonymizeIP: true,
    },
    gtag: {
      trackingID: 'UA-160302501-1',
      anonymizeIP: true,
    },
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Origin',
      logo: {
        alt: 'Polywrap Icon',
        src: 'img/polywrap-logo-light.png',
        srcDark: 'img/polywrap-logo.png',
        href: '/',
      },
      items: [
        {
          label: 'Website',
          href: 'https://polywrap.io',
        },
        {
          label: 'Social',
          position: 'left',
          items: [
            {
              label: 'Blog',
              href: customFields.blogUrl,
              className: 'blog-logo',
              'aria-label': 'Polywrap Blog',
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
              className: 'twitter-logo',
              'aria-label': 'twitter account',
            },
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Code',
              href: customFields.githubUrl,
              className: 'github-logo',
              'aria-label': 'GitHub repository',
            },
            // Add back in once the forum is used
            /*{
              label: 'Discuss',
              href: customFields.forumUrl,
              className: 'forum-logo',
              'aria-label': 'Forum'
            },*/
            {
              label: 'Chat',
              href: customFields.discordUrl,
              className: 'discord-logo',
              'aria-label': 'Discord server',
            },
            {
              label: 'Govern',
              href: customFields.daoUrl,
              className: 'dao-logo',
              'aria-label': 'dao repo',
            },
            {
              label: 'Handbook',
              href: customFields.handbookUrl,
              className: 'handbook-logo',
              'aria-label': 'handbook',
            },
          ],
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/polywrap/documentation/tree/main/src',
          routeBasePath: '/',
        },
        googleAnalytics: {
          trackingID: 'UA-160302501-1',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./style.css'),
        },
        pages: {
          path: 'src/pages',
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
