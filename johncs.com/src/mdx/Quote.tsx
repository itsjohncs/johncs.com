import { ReactNode } from "react";
import styles from "./Quote.module.scss";

export default function PostSnippet({ children }: { children: ReactNode }) {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteGutter} aria-hidden="true">
        {">".repeat(20)}
      </div>
      <div className={styles.quoteSnippet}>{children}</div>
    </div>
  );
}
