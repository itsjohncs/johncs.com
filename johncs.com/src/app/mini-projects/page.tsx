import styles from "./page.module.scss";
import Link from 'next/link';

import * as simpleFrontmatter from './projects/simple-frontmatter.mdx';
import * as dieSim from './projects/die-sim.mdx';
import * as differentLogger from './projects/different-logger.mdx';
import * as tbget from './projects/tbget.mdx';

const projects = [
  simpleFrontmatter,
  dieSim,
  differentLogger,
  tbget
];

export default function MiniProjects() {
  return (
    <main className={styles.main}>
      <h1>Mini Projects</h1>
      <p>Here are some of the (roughly) one-night projects I've made. Quality not at all guaranteed.</p>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h2>
              <Link href={project.metadata.url}>
                {project.metadata.title}
              </Link>
            </h2>
            <p>{project.metadata.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
