import type { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Container.module.css";

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Container({ className, children, ...props }: ContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
