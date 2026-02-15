import { footerNote, privacyUrl } from "@/data/sections";
import { Container } from "@/components/ui";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <p className={styles.note}>{footerNote}</p>
          <a className={styles.link} href={privacyUrl} target="_blank" rel="noreferrer noopener">
            Политика конфиденциальности
          </a>
        </div>
      </Container>
    </footer>
  );
}
