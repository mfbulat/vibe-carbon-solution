import Link from "next/link";
import { navLinks } from "@/data/sections";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          <span className={styles.logoIcon} aria-hidden>
            <span className={styles.logoDot} />
          </span>
          <span className={styles.logoText}>Belyj-veterStocks</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a className={styles.navLink} href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
