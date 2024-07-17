"use client";

import * as simpleFrontmatter from "#root/app/mini-projects/projects/simple-frontmatter.mdx";
import * as dieSim from "#root/app/mini-projects/projects/die-sim.mdx";
import * as differentLogger from "#root/app/mini-projects/projects/different-logger.mdx";
import * as tbget from "#root/app/mini-projects/projects/tbget.mdx";
import { Heading1 } from "#root/mdx/headings";
import PostHeading from "#root/shared-components/PostHeading";

const projects = [simpleFrontmatter, dieSim, differentLogger, tbget];

// Sort projects by date, newest first
projects.sort(
  (a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date),
);

export default function ProjectIndex() {
  return (
    <div className="all-posts">
      <Heading1>All Mini Projects</Heading1>
      {projects.map((project, index: number) => (
        <article key={index} className="post">
          <PostHeading
            url={project.metadata.url}
            title={project.metadata.title}
            date={project.metadata.date}
            anchorDate={true}
          />
          <div className="post-body">
            <project.default />
          </div>
        </article>
      ))}
    </div>
  );
}
