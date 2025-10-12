// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: 'M.Sc Mathematics Notes',
  tagline: 'Transcripts · Study Notes · References',
  favicon: 'img/favicon.ico',

  url: 'https://dhnair.github.io',
  baseUrl: '/msc-maths/',
  organizationName: 'dhnair',
  projectName: 'msc-maths',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
    },
  },
  themeConfig: {
    navbar: {
      title: 'M.Sc Mathematics',
      items: [
        {to: '/docs/intro', label: 'Home', position: 'left'},
        {href: 'https://linkedin.com/in/dhnair', label: 'LinkedIn', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {label: 'GitHub', href: 'https://github.com/dhnair/msc-maths'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/dhnair'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Deepak Nair – Last updated ${new Date().toLocaleDateString()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {customCss: require.resolve('./src/css/custom.css')},
      },
    ],
  ],
};
