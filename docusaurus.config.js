import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TwinPlay',
  favicon: 'img/favicon.ico',

  url: 'https://docs.twinplay.ai',
  baseUrl: '/',

  organizationName: 'twinplay',
  projectName: 'user-manuals',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'it',
    locales: ['en', 'it'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        logo: {
          alt: 'TwinPlay Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} TwinPlay – Tutti i diritti riservati.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
