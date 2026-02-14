import { heroSection } from "@/data/sections";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </div>

          <nav className={styles.menu}>
            {heroSection.topMenuLeft.map((item) => (
              <a href="#catalog" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <nav className={styles.menuRight}>
            {heroSection.topMenuRight.map((item) => (
              <a href="#contacts" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a className={`${styles.topButton} btn-angled`} href="#contacts">
            {heroSection.topButtonLabel}
          </a>
        </div>

        <div className={styles.mainArea}>
          <div className={styles.copy}>
            <h1 className={styles.title}>
                <span >{heroSection.title}</span>
            </h1>
            <p className={styles.subtitle}>{heroSection.subtitle}</p>
            <div className={styles.actions}>
              <a className={`${styles.primaryButton} btn-angled`} href={heroSection.ctaHref}>
                {heroSection.primaryLabel}
              </a>
              <a className={`${styles.secondaryButton} btn-angled`} href={heroSection.contactHref}>
                {heroSection.secondaryLabel}
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
