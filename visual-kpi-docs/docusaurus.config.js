// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    // [
    //   require.resolve('@cmfcmf/docusaurus-search-local'),
    //   {
    //     indexBlog: false,
    //   },
    // ],
    require.resolve('docusaurus-plugin-image-zoom'),
    'docusaurus-plugin-sass',
  ],

  title: 'Visual KPI',
  tagline: 'Visual KPI',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Transpara', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          admonitions: {
            keywords: [
                'info',
                'success',
                'danger',
                'note',
                'tip',
                'warning',
                'important',
                'caution',
                'support',
                'training',
                'unique',
              ],
          },
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
      // colorMode: {
      //   defaultMode: 'light',
      //   disableSwitch: true,
      //   respectPrefersColorScheme: false,
      // },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          // hideable: true,
          autoCollapseCategories: true,
        },
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255,0.9)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Site Logo',
          src: 'img/transpara_logo.png',
          className: 'site_logo',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
            to: 'docs/',
          },
          {
            to: 'https://www.transpara.com/',
            label: 'Learn more',
            position: 'right',
            className: 'navbar_link_buttons'
          },
          {
            to: 'https://www.transpara.com/contact-us/',
            label: 'Contact the support',
            position: 'right',
            className: 'navbar_link_buttons'
          },
          // {
          //   type: 'search',
          //   position: 'right',
          //   className: 'searchbar'
          // },
          // {
          //   href: 'https://github.com/orgs/writechoiceorg/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Trasnpara',
            items: [
              {
                label: 'Learn more',
                to: 'https://www.transpara.com/',
              },
              {
                label: 'Contact the support',
                to: 'https://www.transpara.com/contact-us/  ',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Transpara. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
