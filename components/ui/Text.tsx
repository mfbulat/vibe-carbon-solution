import type { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Text.module.css";

type TextVariant = "body" | "muted" | "title";

type TextProps<T extends ElementType> = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    as?: T;
    variant?: TextVariant;
  }
>;

export function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType;
  const classes = [styles.text, styles[variant], className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
