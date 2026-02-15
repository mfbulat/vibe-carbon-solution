import type { MouseEvent } from "react";
import styles from "./MobileMenu.module.css";

type MobileMenuLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  open: boolean;
  links: ReadonlyArray<MobileMenuLink>;
  onClose: () => void;
};

export function MobileMenu({ open, links, onClose }: MobileMenuProps) {
  const stopPanelClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`${styles.wrapper} ${open ? styles.wrapperOpen : ""}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`} />
      <nav
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onClick={stopPanelClick}
      >
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.label}>
              <a className={styles.link} href={link.href} onClick={onClose}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
