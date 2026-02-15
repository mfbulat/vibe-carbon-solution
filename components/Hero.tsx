"use client";

import { useEffect, useState } from "react";
import { heroSection } from "@/data/sections";
import { Container } from "@/components/ui";
import styles from "./Hero.module.css";

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const scrollY = window.scrollY;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevHtmlScrollBehavior = document.documentElement.style.scrollBehavior;
    const prevBodyScrollBehavior = document.body.style.scrollBehavior;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyLeft = document.body.style.left;
    const prevBodyRight = document.body.style.right;
    const prevBodyWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.left = prevBodyLeft;
      document.body.style.right = prevBodyRight;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
      document.documentElement.style.scrollBehavior = prevHtmlScrollBehavior;
      document.body.style.scrollBehavior = prevBodyScrollBehavior;
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </div>

          <button
            type="button"
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ""}`}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            aria-controls="hero-menu-group"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            id="hero-menu-group"
            className={`${styles.menuGroup} ${isMenuOpen ? styles.menuGroupOpen : ""}`}
          >
            <nav className={styles.menu}>
              {heroSection.topMenuLeft.map((item) => (
                <a href="#catalog" key={item} onClick={handleNavClick}>
                  {item}
                </a>
              ))}
            </nav>

            <nav className={styles.menuRight}>
              {heroSection.topMenuRight.map((item) => (
                <a href="#contacts" key={item} onClick={handleNavClick}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <a className={`${styles.topButton} btn-angled`} href="#contacts" onClick={handleNavClick}>
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
        
      </Container>
    </section>
  );
}
