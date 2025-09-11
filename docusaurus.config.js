import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TwinPlay',
  favicon: 'img/favicon.ico',

  url: 'https://docs.twinplay.ai',
  baseUrl: '/',

  organizationName: 'TwinPlay-AI',
  projectName: 'user-manuals',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'es', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      it: {
        htmlLang: 'it-IT',
      },
      es: {
        htmlLang: 'es-ES',
      },
      fr: {
        htmlLang: 'fr-FR',
      },
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
          srcDark: 'img/logo_green.png',
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
