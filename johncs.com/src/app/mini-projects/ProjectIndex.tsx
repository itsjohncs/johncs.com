"use client";

import * as simpleFrontmatter from "#root/app/mini-projects/projects/simple-frontmatter.mdx";
import * as dieSim from "#root/app/mini-projects/projects/die-sim.mdx";
import * as differentLogger from "#root/app/mini-projects/projects/different-logger.mdx";
import * as tbget from "#root/app/mini-projects/projects/tbget.mdx";

import Link from "next/link";

function getSlug(rawURL: string): string {
  try {
    const url = new URL(rawURL);
    const pathParts = url.pathname.split("/").filter((i) => !!i);
    if (pathParts.length === 0) {
      throw new Error("URL path is empty");
    }
    return pathParts[pathParts.length - 1];
  } catch (error) {
    throw new Error("Invalid URL: " + rawURL);
  }
}

const projects = [simpleFrontmatter, dieSim, differentLogger, tbget];

export default function ProjectIndex() {
  return (
    <div className="all-posts">
      {projects.map((project, index: number) => (
        <article key={index} className="post">
          <div className="post-heading">
            <span>
              <Link href={project.metadata.url} className="post-title">
                {project.metadata.title}
              </Link>
              <time className="post-date">
                <span aria-hidden="true">
                  [
                  <a
                    id={getSlug(project.metadata.url)}
                    className="timestamp-anchor"
                    href={`#${getSlug(project.metadata.url)}`}
                  >
                    {project.metadata.date}
                  </a>
                  ]
                </span>
                <span className="sr-only">{project.metadata.date}</span>
              </time>
            </span>
          </div>
          <div className="post-body">
            <project.default />
          </div>
        </article>
      ))}
    </div>
  );
}
