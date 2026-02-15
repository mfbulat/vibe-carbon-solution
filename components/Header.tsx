"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/sections";
import { BurgerButton } from "@/components/ui/BurgerButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          <span className={styles.logoIcon} aria-hidden>
            <span className={styles.logoDot} />
          </span>
          <span className={styles.logoText}>Belyj-veterStocks</span>
        </Link>

        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <a className={styles.navLink} href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.burger}>
          <BurgerButton open={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
        </div>
      </div>

      {isMobile ? <MobileMenu open={isOpen} links={navLinks} onClose={closeMenu} /> : null}
    </header>
  );
}
