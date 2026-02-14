import type { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Card.module.css";

type CardVariant = "default" | "elevated";

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    variant?: CardVariant;
  }
>;

export function Card({ variant = "default", className, children, ...props }: CardProps) {
  const classes = [styles.card, variant === "elevated" ? styles.elevated : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
}
