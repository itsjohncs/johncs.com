import Link from "next/link";
import ProjectIndex from "./ProjectIndex";
import NavBar from "#root/shared-components/NavBar";

export default function MiniProjects() {
    return (
        <>
            <NavBar path="/mini-projects" />
            <main>
                <p>
                    I post mini projects I&apos;ve made here that I think others
                    may find interesting.
                </p>
                <p>
                    Subscribe to new posts via <Link href="/rss.xml">RSS</Link>{" "}
                    or by following me on{" "}
                    <a href="https://x.com/itsjohncs">X</a>.
                </p>
                <ProjectIndex />
            </main>
        </>
    );
}
