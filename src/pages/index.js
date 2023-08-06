import React, { useEffect } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { ServerList } from "@site/src/components/ServerList";
import styles from "./index.module.css";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Download, InfoRounded } from "@mui/icons-material";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const footer = document.getElementsByClassName("footer")[0];

    footer.style.marginTop = "-140px";
    footer.style.paddingTop = "140px";

    return () => {
      footer.style.marginTop = "0px";
      footer.style.paddingTop = "0px";
    };
  }, []);

  return (
    <header>
      <div
        style={{
          padding: "30vh 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url("/img/background.png")`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, calc(50% + 1px) calc(100% - 80px), calc(50% + 30px) calc(100% - 50px), 0px calc(100% - 135px))",
          height: "110vh",
          zIndex: "600",
        }}
      >
        <h1 className={styles.title}>
          <strong className={styles.subTitle} style={{
            marginBottom: "-1rem",
          }}>The Unofficial</strong>
          <br />
          {siteConfig.title}
        </h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.buttonDownload}
            href="https://github.com/Ipmake/kocitylauncher/releases/latest/download/KnockoutCityLauncher-Setup.exe"
          >
            <Download style={{
              marginRight: "0.5rem",
              
            }} /> Download
          </Link>
          <Link
            className={styles.buttonInstructions}
            href="https://github.com/Ipmake/kocitylauncher"
          >
            <InfoRounded style={{
              marginRight: "0.5rem",
              
            }} /> Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: "dark",
      },
    })}>
      <CssBaseline />
      <Layout
        title={`Welcome to Knockout City`}
        description="The documentation for the unofficial Knockout City Launcher"
      >
        <HomepageHeader />
        <main style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}>
          <div style={{
              padding: "20vh 0",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/img/communityscreenshot.png")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              zIndex: "500",
              marginTop: "-200px",
              clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, calc(50% + 1px) calc(100% - 80px), calc(50% + 30px) calc(100% - 50px), 0px calc(100% - 135px))",
          }} className="fullScreen">
            <HomepageFeatures />
          </div>
          <div style={{
              padding: "20vh 0",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/img/publicservers.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              zIndex: "400",
              marginTop: "-200px",
              clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, calc(50% + 1px) calc(100% - 80px), calc(50% + 30px) calc(100% - 50px), 0px calc(100% - 135px))",
          }} className="fullScreen">
            <ServerList />
          </div>
        </main>
      </Layout>
    </ThemeProvider>
  );
}
