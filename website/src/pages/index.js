import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Structured transcripts and study notes for the M.Sc Mathematics program.">
      
      {/* Hero Section */}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">M.Sc Mathematics</h1>
          <p className="hero__subtitle">
            Transcripts · Study Notes · References
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl('/content/')}>
              Start Reading →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className={styles.features}>
          <div className="container">
            
            {/* About Section */}
            <div className="row margin-bottom--lg">
              <div className="col col--12 text--center">
                <h3>📘 About This Project</h3>
                <p>
                  A structured, version-controlled collection of{' '}
                  <strong>M.Sc Mathematics transcripts, study notes, and reference materials</strong>, 
                  organized term-wise and course-wise. Built as a living academic record — 
                  open, evolving, and easy to explore.
                </p>
              </div>
            </div>

            {/* Learning Philosophy Section */}
            <div className="row margin-bottom--lg">
              <div className="col col--12 text--center">
                <h3>💭 Learning Philosophy</h3>
                <blockquote>
                  <p>
                    “Mathematics is not about numbers, equations, computations, or algorithms — 
                    it’s about understanding.”
                  </p>
                  <footer>— William Paul Thurston</footer>
                </blockquote>
              </div>
            </div>

            {/* Author Section */}
            <div className="row margin-top--lg">
              <div className="col col--12 text--center">
                <h3>✍️ Author</h3>
                <p>
                  <strong>Deepak Nair</strong><br />
                  📍 M.Sc Mathematics (2025)<br />
                  <a
                    href="https://linkedin.com/in/dhnair"
                    target="_blank"
                    rel="noopener noreferrer">
                    LinkedIn
                  </a><br />
                  <em>Turning notes into a living mathematical library.</em>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
