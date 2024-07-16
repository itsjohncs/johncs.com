"use client";

import * as simpleFrontmatter from "#root/app/mini-projects/projects/simple-frontmatter.mdx";
import * as dieSim from "#root/app/mini-projects/projects/die-sim.mdx";
import * as differentLogger from "#root/app/mini-projects/projects/different-logger.mdx";
import * as tbget from "#root/app/mini-projects/projects/tbget.mdx";
import { Heading2 } from "#root/headings";
import PostHeading from "./PostHeading";

const projects = [simpleFrontmatter, dieSim, differentLogger, tbget];

export default function ProjectIndex() {
  return (
    <div className="all-posts">
      <Heading2>All Mini Projects</Heading2>
      {projects.map((project, index: number) => (
        <article key={index} className="post">
          <PostHeading
            url={project.metadata.url}
            title={project.metadata.title}
            date={project.metadata.date}
          />
          <div className="post-body">
            <project.default />
          </div>
        </article>
      ))}
    </div>
  );
}
