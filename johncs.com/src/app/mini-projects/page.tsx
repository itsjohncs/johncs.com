import styles from "./page.module.scss";
import Link from 'next/link';
import ProjectIndex from "./ProjectIndex";

export default function MiniProjects() {
  return (
    <main className={styles.main}>
      <h1>Mini Projects</h1>
      <p>Here are some of the (roughly) one-night projects I've made. Quality not at all guaranteed.</p>
      <ProjectIndex />
    </main>
  );
}
