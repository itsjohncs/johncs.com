import { ReactNode } from "react";
import styles from "./PostSnippet.module.scss";

export default function PostSnippet({ children }: { children: ReactNode }) {
  return (
    <div className={styles.postSnippetContainer}>
      <div className={styles.quoteGutter} aria-hidden="true">
        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
      </div>
      <div className={styles.postSnippet}>{children}</div>
    </div>
  );
}
