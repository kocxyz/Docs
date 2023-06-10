import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {ServerList} from '@site/src/components/ServerList';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.title}>
          The Unofficial
          <br />
          {siteConfig.title}
        </h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.buttonDownload}
            href="https://github.com/Ipmake/kocitylauncher/releases/latest"
          >
            Download the Launcher
          </Link>
          <Link
            className={styles.buttonInstructions}
            href="https://github.com/Ipmake/kocitylauncher#readme"
          >
            Instructions and information
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Welcome to Knockout City`}
      description="The documentation for the unofficial Knockout City Launcher">
      <HomepageHeader />
      <main>
        <ServerList />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
