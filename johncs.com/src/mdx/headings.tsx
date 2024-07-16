import React, { ReactElement } from "react";
import styles from "./headings.module.scss";

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading1({ children }: HeadingProps): ReactElement {
  return (
    <h1 className={styles.heading}>
      <span aria-hidden="true">#</span> {children}
    </h1>
  );
}

export function Heading2({ children }: HeadingProps): ReactElement {
  return (
    <h2 className={styles.heading}>
      <span aria-hidden="true">##</span> {children}
    </h2>
  );
}

export function Heading3({ children }: HeadingProps): ReactElement {
  return (
    <h3 className={styles.heading}>
      <span aria-hidden="true">###</span> {children}
    </h3>
  );
}

export function Heading4({ children }: HeadingProps): ReactElement {
  return (
    <h4 className={styles.heading}>
      <span aria-hidden="true">####</span> {children}
    </h4>
  );
}

export function Heading5({ children }: HeadingProps): ReactElement {
  return (
    <h5 className={styles.heading}>
      <span aria-hidden="true">#####</span> {children}
    </h5>
  );
}

export function Heading6({ children }: HeadingProps): ReactElement {
  return (
    <h6 className={styles.heading}>
      <span aria-hidden="true">######</span> {children}
    </h6>
  );
}
