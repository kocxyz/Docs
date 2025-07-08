import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Knockout City Launcher',
  tagline: "Brawlin doesn't have to end. Join the community.",
  favicon: 'img/icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kocity.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ipmake', // Usually your GitHub org/user name.
  projectName: 'kocitydocs', // Usually your repo name.
  // deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ipmake/kocitydocs/tree/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KoCity',
      logo: {
        alt: 'KOCITY',
        src: 'img/icon.png',
      },
      items: [
        {
          to: '/docs/category/api-docs',
          position: 'left',
          label: 'Auth',
        },
        {
          to: '/docs/category/proxy-docs',
          position: 'left',
          label: 'Proxy',
        },
        {
          to: '/docs/category/hosting',
          position: 'left',
          label: 'Hosting',
        },

        {
          href: 'https://patreon.com/kocxyz?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink',
          label: 'Patreon',
          position: 'right',
        },
        {
          href: 'https://discord.gg/4kNPb4cRxN',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/Ipmake/kocitylauncher',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Github',
          items: [
            {
              label: 'Launcher',
              href: 'https://github.com/Ipmake/kocitylauncher',
            },
            {
              label: 'Proxy',
              href: 'https://github.com/Ipmake/KOCity-Proxy',
            },
            {
              label: 'KoCity Docker',
              href: 'https://github.com/Tandashi/knockoutcity-server-docker/pkgs/container/knockoutcity-server-docker',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/4kNPb4cRxN',
            },
            {
              label: 'KoCity Discord',
              href: 'https://discord.gg/knockoutcity',
            },
            {
              label: 'Website',
              href: 'https://www.knockoutcity.com/',
            },
          ],
        },
        {
          title: 'Extras',
          items: [
            {
              label: 'Patreon',
              href: 'https://patreon.com/kocxyz?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink',
            },
            {
              label: 'Credits',
              to: '/docs/extras/credits',
            },
          ],
        },
      ],
      copyright: `Build with ❤️ by the community 💪`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
