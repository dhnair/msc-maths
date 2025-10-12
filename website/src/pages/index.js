import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="M.Sc Mathematics Notes - Transcripts, Study Notes, and References">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">M.Sc Mathematics Notes</h1>
          <p className="hero__subtitle">
            Transcripts · Study Notes · References
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              View Notes → 
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center">
                  <h3>📘 About This Project</h3>
                </div>
                <p>
                  A structured, version-controlled collection of MSc Mathematics
                  <strong> transcripts, study notes, and references</strong>,
                  organized term-wise and unit-wise.
                </p>
              </div>

              <div className="col col--4">
                <div className="text--center">
                  <h3>🧮 Core Focus</h3>
                </div>
                <p>
                  Built around the <em>M.Sc Mathematics curriculum</em> — blending
                  conceptual depth with concise, exam-oriented revision notes.
                </p>
              </div>

              <div className="col col--4">
                <div className="text--center">
                  <h3>🔗 Quick Access</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/docs/term1/real_analysis_i/notes/emth515_u01t01_study_notes">
                      Real Analysis I
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/term1/advanced_abstract_algebra_i/notes/emth516_u01_study_notes">
                      Advanced Abstract Algebra I
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/resources/references/math_symbols_glossary">
                      Math Symbols Glossary
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row margin-top--lg">
              <div className="col col--12 text--center">
                <blockquote>
                  <p>
                    “Mathematics is not about numbers, equations, computations, or
                    algorithms — it’s about understanding.”
                  </p>
                  <footer>— William Paul Thurston</footer>
                </blockquote>
                <p>
                  <strong>Deepak Nair</strong><br />
                  📍 M.Sc Mathematics (2025)<br />
                  <a
                    href="https://linkedin.com/in/dhnair"
                    target="_blank"
                    rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <br />
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
