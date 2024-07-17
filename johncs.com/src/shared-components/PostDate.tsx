import styles from "./PostDate.module.scss";

export default function PostDate({ children }: any) {
  return (
    <time className={styles.postDate}>
      <span aria-hidden="true">[</span>
      {children}
      <span aria-hidden="true">]</span>
    </time>
  );
}
