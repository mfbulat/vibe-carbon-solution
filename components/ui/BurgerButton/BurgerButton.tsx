import styles from "./BurgerButton.module.css";

type BurgerButtonProps = {
  open: boolean;
  onClick: () => void;
};

export function BurgerButton({ open, onClick }: BurgerButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${open ? styles.open : ""}`}
      aria-label="Toggle navigation"
      aria-expanded={open}
      onClick={onClick}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
}
