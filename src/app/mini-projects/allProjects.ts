import * as simpleFrontmatter from "#root/app/mini-projects/projects/simple-frontmatter.mdx";
import * as dieSim from "#root/app/mini-projects/projects/die-sim.mdx";
import * as differentLogger from "#root/app/mini-projects/projects/different-logger.mdx";
import * as tbget from "#root/app/mini-projects/projects/tbget.mdx";
import * as vite from "#root/app/mini-projects/projects/vite-prebundle-workers.mdx";

const allProjects = [simpleFrontmatter, dieSim, differentLogger, tbget, vite];

// Sort projects by date, newest first
allProjects.sort(
    (a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date),
);

export default allProjects;

export const projectMetadata = allProjects.map((project) => project.metadata);
