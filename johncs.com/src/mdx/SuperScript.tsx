import React from "react";
import styles from "./SuperScript.module.scss";

export function SuperScriptLink({
  children,
  ...rest
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a {...rest}>
      <span aria-hidden="true">[^</span>
      <span>{children}</span>
      <span aria-hidden="true">]</span>
    </a>
  );
}

export function SuperScript({ children }: React.HTMLProps<HTMLElement>) {
  return <sup className={styles.superscript}>{children}</sup>;
}
