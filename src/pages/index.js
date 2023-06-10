import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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
          <Link
            className={styles.buttonDiscord}
            href="https://discord.gg/4kNPb4cRxN"
          >
            <img className={styles.discordLogo} src="/img/discord-logo.svg" alt=""/>
            Join our Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to Knockout City`}
      description="The documentation for the unofficial Knockout City Launcher">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
