---
slug: building-with-docusaurus
title: Building a Documentation Portal with Docusaurus
authors:
  name: Oscar Gomes
  title: Founder of NextMove
  url: https://github.com/oscarGomes86
  image_url: https://github.com/oscarGomes86.png
tags: [docusaurus, documentation, tech]
---

In this post, I'll share my experience setting up NextMove's documentation portal using Docusaurus, a modern static website generator built with React.

## Why Docusaurus?

When choosing a documentation platform, I had several requirements:
- React-based for familiarity and extensibility
- Markdown support for easy content creation
- Built-in search functionality
- Dark mode support
- Easy deployment and maintenance

Docusaurus checked all these boxes and more. It's backed by Meta (formerly Facebook) and has a thriving community.

## Key Features We're Using

### 1. MDX Support
MDX allows us to use React components within Markdown files, enabling interactive documentation:

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm">
    npm install my-package
  </TabItem>
  <TabItem value="yarn" label="yarn">
    yarn add my-package
  </TabItem>
</Tabs>
```

### 2. Document Versioning
As our projects evolve, we can version our documentation to maintain backward compatibility:

```bash
npm run docusaurus docs:version 1.0.0
```

### 3. Blog Support
The built-in blog feature (which you're reading right now!) supports:
- Author profiles
- Reading time estimation
- Tags and categories
- RSS feeds

## Our Setup

Here's how we structured our documentation:

```
docs/
├── intro.md
└── initiatives/
    ├── aluxe-life/
    ├── tech-blog/
    ├── ai-tools/
    └── cloud-solutions/
```

## Custom Styling

We've customized our Docusaurus theme using CSS modules and custom components. Here's an example of our custom styling:

```css
:root {
  --ifm-color-primary: #00B2D6;
  --ifm-color-primary-dark: #00A0C1;
  --brand-navy: #1A1B41;
  --brand-cyan: #00B2D6;
  --brand-light: #FFFFFF;
  --brand-gray: #F5F6F7;
}
```

## Deployment

We're using GitHub Pages for hosting, which makes deployment as simple as:

```bash
GIT_USER=<username> npm run deploy
```

## Next Steps

We're planning to:
- Add search functionality with Algolia DocSearch
- Implement versioned documentation for our AI Tools
- Create interactive code examples
- Add integration with our CI/CD pipeline

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Our GitHub Repository](https://github.com/oscarGomes86/nextmove)
- [MDX Documentation](https://mdxjs.com/)

Stay tuned for more technical posts about our development journey! 