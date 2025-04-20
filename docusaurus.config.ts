import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NextMove',
  tagline: 'Building the future, one project at a time',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://oscargomes86.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nextmove/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oscarGomes86', // Usually your GitHub org/user name.
  projectName: 'nextmove', // Usually your repo name.

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
          // Update the edit URL to point to the new repository
          editUrl: 'https://github.com/oscarGomes86/nextmove/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Update the edit URL to point to the new repository
          editUrl: 'https://github.com/oscarGomes86/nextmove/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NextMove',
      logo: {
        alt: 'NextMove Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Initiatives',
          position: 'left',
          items: [
            {
              label: 'aluxe.life',
              to: '/docs/initiatives/aluxe-life',
            },
            {
              label: 'Tech Blog',
              to: '/docs/initiatives/tech-blog',
            },
            {
              label: 'AI Tools',
              to: '/docs/initiatives/ai-tools',
            },
            {
              label: 'Cloud Solutions',
              to: '/docs/initiatives/cloud-solutions',
            },
            {
              label: 'Open Source',
              to: '/docs/initiatives/open-source',
            },
            {
              label: 'Digital Garden',
              to: '/docs/initiatives/digital-garden',
            },
          ],
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'right',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/oscarGomes86',
            }
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'aluxe.life',
              to: '/docs/initiatives/aluxe-life',
            },
            {
              label: 'Tech Blog',
              to: '/docs/initiatives/tech-blog',
            },
            {
              label: 'AI Tools',
              to: '/docs/initiatives/ai-tools',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/oscarGomes86',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/your-username',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/your-username',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NextMove. Built with ❤️ using Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
