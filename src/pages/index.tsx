import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          NextMove
        </Heading>
        <p className="hero__subtitle">
          Building the future, one project at a time
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Explore Projects →
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({title, description, link, icon, status = 'active'}) {
  return (
    <div className={clsx(styles.projectCard, styles[`status${status}`])}>
      <div className={styles.projectIcon}>{icon}</div>
      {status !== 'active' && (
        <div className={styles.statusBadge}>{status}</div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className={styles.projectLink}>
        Learn More →
      </Link>
    </div>
  );
}

function HomepageProjects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Current Initiatives</h2>
          <p>Explore our various projects and initiatives</p>
        </div>
        <div className={styles.projectsGrid}>
          <ProjectCard
            title="Aluxe.Life"
            description="A luxury lifestyle brand focused on mindful living and sustainable elegance."
            link="/docs/initiatives/aluxe-life"
            icon="✨"
            status="active"
          />
          <ProjectCard
            title="Tech Blog"
            description="Personal tech blog sharing insights about software development, cloud architecture, and AI/ML."
            link="/docs/initiatives/tech-blog"
            icon="💻"
            status="planned"
          />
          <ProjectCard
            title="AI Tools"
            description="Collection of AI-powered tools and utilities for developers and content creators."
            link="/docs/initiatives/ai-tools"
            icon="🤖"
            status="planned"
          />
          <ProjectCard
            title="Cloud Solutions"
            description="Enterprise-grade cloud solutions and architecture patterns."
            link="/docs/initiatives/cloud-solutions"
            icon="☁️"
            status="planned"
          />
          <ProjectCard
            title="Open Source"
            description="Contributing to and maintaining open source projects for the community."
            link="/docs/initiatives/open-source"
            icon="🌟"
            status="planned"
          />
          <ProjectCard
            title="Digital Garden"
            description="A collection of thoughts, learnings, and experiments in technology and business."
            link="/docs/initiatives/digital-garden"
            icon="🌱"
            status="planned"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({title, description, icon}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Why NextMove?</h2>
          <p>Our approach to building and documenting projects</p>
        </div>
        <div className={styles.featuresGrid}>
          <FeatureCard
            title="Tech-Driven"
            description="Leveraging modern technology to create innovative solutions"
            icon="💻"
          />
          <FeatureCard
            title="Documentation First"
            description="Comprehensive documentation for every project"
            icon="📚"
          />
          <FeatureCard
            title="Open Source"
            description="Sharing knowledge and code with the community"
            icon="🌐"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation portal for innovative side projects">
      <HomepageHeader />
      <main>
        <HomepageProjects />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
