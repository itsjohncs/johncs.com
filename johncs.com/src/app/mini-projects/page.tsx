import styles from "./page.module.scss";

export default function MiniProjects() {
  return (
    <main className={styles.main}>
      <h1>Mini Projects</h1>
      <p>Here are some of the (roughly) one-night projects I've made. Quality not at all guaranteed.</p>
      <div className={styles.projectList}>
        {/* We'll add the list of mini projects here later */}
      </div>
    </main>
  );
}
