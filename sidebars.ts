import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Initiatives',
      items: [
        {
          type: 'category',
          label: 'Aluxe.Life',
          items: [
            'initiatives/aluxe-life/index',
            'initiatives/aluxe-life/brand-guidelines',
            'initiatives/aluxe-life/content-strategy',
            'initiatives/aluxe-life/marketing-plan',
            'initiatives/aluxe-life/product-development',
          ],
        },
        {
          type: 'category',
          label: 'Tech Blog',
          items: [
            'initiatives/tech-blog/index',
            'initiatives/tech-blog/content-strategy',
            'initiatives/tech-blog/technical-stack',
            'initiatives/tech-blog/deployment',
            'initiatives/tech-blog/analytics',
          ],
        },
        {
          type: 'category',
          label: 'AI Tools',
          items: [
            'initiatives/ai-tools/index',
            'initiatives/ai-tools/architecture',
            'initiatives/ai-tools/models',
            'initiatives/ai-tools/deployment',
            'initiatives/ai-tools/monitoring',
          ],
        },
        {
          type: 'category',
          label: 'Cloud Solutions',
          items: [
            'initiatives/cloud-solutions/index',
            'initiatives/cloud-solutions/architecture',
            'initiatives/cloud-solutions/infrastructure',
            'initiatives/cloud-solutions/security',
            'initiatives/cloud-solutions/monitoring',
          ],
        },
        {
          type: 'category',
          label: 'Open Source',
          items: [
            'initiatives/open-source/index',
            'initiatives/open-source/projects',
            'initiatives/open-source/contributing',
            'initiatives/open-source/governance',
            'initiatives/open-source/roadmap',
          ],
        },
        {
          type: 'category',
          label: 'Digital Garden',
          items: [
            'initiatives/digital-garden/index',
            'initiatives/digital-garden/notes',
            'initiatives/digital-garden/articles',
            'initiatives/digital-garden/resources',
            'initiatives/digital-garden/growth',
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
