import { footerNote, privacyUrl } from "@/data/sections";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.note}>{footerNote}</p>
        <a className={styles.link} href={privacyUrl} target="_blank" rel="noreferrer noopener">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
