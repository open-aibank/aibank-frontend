import { useTranslation } from "react-i18next";

import Link from "@/components/Link/Link";
import feature1 from "@/assets/feature1.svg";
import feature2 from "@/assets/feature2.svg";
import feature3 from "@/assets/feature3.svg";
import heroTitle from "@/assets/hero_title.png";
import badge2x from "@/assets/badge_2x.png";
import featureIcon1 from "@/assets/web3-feature-icon1.svg";
import featureIcon2 from "@/assets/web3-feature-icon2.svg";
import featureIcon3 from "@/assets/web3-feature-icon3.svg";
import featureIcon4 from "@/assets/web3-feature-icon4.svg";
// import warningIcon from "@/assets/warning.svg";
import mcpMd from "@/assets/mcp_md.png";
import mcpLg from "@/assets/mcp_lg.png";
import x402Md from "@/assets/x402_md.png";
import x402Lg from "@/assets/x402_lg.png";
import PageShell from "@/components/PageShell/PageShell";
import commonConfig from "@/configs/common";
import styles from "./Home.module.scss";

const iconMap = {
  feature1,
  feature2,
  feature3,
};

const web3Features = [
  {
    icon: featureIcon1,
    key: "safeBalance",
  },
  {
    icon: featureIcon2,
    key: "instantTransfers",
  },
  {
    icon: featureIcon3,
    key: "smartContractCalls",
  },
  {
    icon: featureIcon4,
    key: "payPerUse",
  },
];
export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <section id="hero" className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <img src={badge2x} alt={t("home.hero.badge.text")} className={styles.heroBadge} />
            <img src={heroTitle} alt="" className={styles.heroTitleImage} />
            <p className={styles.heroSubtitle}>{t("home.hero.subtitle")}</p>
            <div className={styles.heroFeatures}>
              {Object.entries(
                t("home.hero.features", { returnObjects: true }) as Record<
                  string,
                  { text: string }
                >,
              ).map(([key, feature]) => {
                return (
                  <div key={key} className={styles.featureItem}>
                    <img src={iconMap[key as keyof typeof iconMap]} className={styles.iconImage} />
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                );
              })}
            </div>
            {/*<div className={styles.heroActions}>*/}
            {/*  <Button onClick={handleGetStartedClick} style={{ width: 180 }}>*/}
            {/*    {t("home.hero.getStarted")}*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    as="a"*/}
            {/*    href={commonConfig.docUrl}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    variant="default"*/}
            {/*    style={{ width: 180 }}*/}
            {/*  >*/}
            {/*    {t("home.hero.learnMore")}*/}
            {/*  </Button>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>

      <section id="features" className={styles.section}>
        <PageShell title={t("home.features.title")}>{t("home.features.subtitle")}</PageShell>
        <div className={styles.web3Features}>
          {web3Features.map((feature) => (
            <div className={styles.featureCard} key={feature.key}>
              <img
                src={feature.icon}
                alt={t(`home.features.${feature.key}.title`)}
                className={styles.featureCardIcon}
              />
              <h3 className={styles.featureCardTitle}>{t(`home.features.${feature.key}.title`)}</h3>
              <div className={styles.featureCardContent}>
                {t(`home.features.${feature.key}.content`)}
              </div>
            </div>
          ))}
        </div>
        {/*<div className={styles.warningAlert}>*/}
        {/*  <div className={styles.warningIcon}>*/}
        {/*    <img src={warningIcon} alt="Warning" className={styles.warningIconImg} />*/}
        {/*  </div>*/}
        {/*  <div className={styles.warningContent}>*/}
        {/*    <div className={styles.warningTitle}>WARNING</div>*/}
        {/*    <div className={styles.warningText}>*/}
        {/*      {t("home.warning.left")}*/}
        {/*      {/*<Link href={commonConfig.pullrequest}>{t("home.warning.center")}</Link>*!/}
        {/*      {/*{t("home.warning.right")}*!/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>

      <section className={styles.section}>
        <PageShell title={t("home.seeItInAction.title")} variant="subtitle">
          {t("home.seeItInAction.subtitle_part1")}
          <Link href={commonConfig.openclawextension} underline={true}>
            {t("home.seeItInAction.demoGithub")}
          </Link>
          {t("home.seeItInAction.subtitle_part2")}
        </PageShell>
        <div className={styles.seeItInActionContent}>
          <picture>
            <source media="(min-width: 1512px)" srcSet={mcpLg} />
            <img src={mcpMd} alt="MCP" className={styles.actionImage} />
          </picture>
          <picture>
            <source media="(min-width: 1512px)" srcSet={x402Lg} />
            <img src={x402Md} alt="X402" className={styles.actionImage} />
          </picture>
        </div>
      </section>

      {/*<section id="quick-start" className={styles.section}>*/}
      {/*  <PageShell title={t("home.quickStart.title")}>*/}
      {/*    <div className={styles.quickStartContent}>*/}
      {/*      {t("home.quickStart.subtitle_part1")}*/}
      {/*      <Link href={commonConfig.openclaw} underline={true}>*/}
      {/*        {t("home.quickStart.openclaw")}*/}
      {/*      </Link>*/}
      {/*      {t("home.quickStart.subtitle_part2")}*/}
      {/*    </div>*/}
      {/*  </PageShell>*/}
      {/*  <div className={styles.terminalCard}>*/}
      {/*    <div className={styles.terminalHeader}>*/}
      {/*      <div className={styles.terminalControls}>*/}
      {/*        <span className={styles.terminalDot}></span>*/}
      {/*        <span className={styles.terminalDot}></span>*/}
      {/*        <span className={styles.terminalDot}></span>*/}
      {/*      </div>*/}
      {/*      <div className={styles.terminalTitle}>Terminal</div>*/}
      {/*      <div className={styles.terminalCopyWrapper}>*/}
      {/*        {showCopied && (*/}
      {/*          <span className={styles.copiedText}>{t("home.quickStart.copied")}</span>*/}
      {/*        )}*/}
      {/*        <button*/}
      {/*          className={styles.terminalCopyButton}*/}
      {/*          onClick={handleCopy}*/}
      {/*          aria-label="Copy command"*/}
      {/*        >*/}
      {/*          <img src={copyIcon} alt="Copy" />*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={styles.terminalContent}>*/}
      {/*      <code className={styles.terminalCommand}>{TERMINAL_COMMAND}</code>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={styles.quickStartSteps}>*/}
      {/*    {QUICK_START_STEPS.map((step) => (*/}
      {/*      <div key={step.id} className={styles.stepCard}>*/}
      {/*        <div className={styles.stepNumber}>{step.id}</div>*/}
      {/*        <div className={styles.stepTitle}>{t(`home.quickStart.steps.${step.key}.title`)}</div>*/}
      {/*        <div className={styles.stepContent}>*/}
      {/*          {t(`home.quickStart.steps.${step.key}.content`)}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
}
