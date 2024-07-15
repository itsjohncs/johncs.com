"use client";

import * as simpleFrontmatter from './projects/simple-frontmatter.mdx';
import * as dieSim from './projects/die-sim.mdx';
import * as differentLogger from './projects/different-logger.mdx';
import * as tbget from './projects/tbget.mdx';

import styles from "./page.module.scss";
import Link from 'next/link';

interface ProjectMetadata {
    title: string;
    date: string;
    url: string;
}

interface Project {
    metadata: ProjectMetadata;
}

const projects: Project[] = [
    simpleFrontmatter,
    dieSim,
    differentLogger,
    tbget
];

export default function ProjectIndex() {
    return <div className={styles.projectList}>
        {projects.map((project: Project, index: number) => (
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
}
