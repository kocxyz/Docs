// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Knockout City Launcher',
  tagline: 'The documentation for the unofficial knockout city launcher',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://kocity.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Ipmake/kocitydocs/tree/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
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
        style: "dark",
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
              }
            ],
          },
          {
            title: 'Extras',
            items: [
              {
                label: 'Credits',
                to: '/docs/extras/credits',
              },
            ],
          },
        ],
        copyright: `Build with ❤️ by Ipmake. For the community 💪`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
