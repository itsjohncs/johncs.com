import Link from "next/link";
import ProjectIndex from "./ProjectIndex";
import NavBar from "#root/shared-components/NavBar";

export default function MiniProjects() {
    return (
        <>
            <NavBar path="/mini-projects" />
            <main>
                <p>
                    Here are some of the (roughly) one-night projects I&apos;ve
                    made. Quality not at all guaranteed.
                </p>
                <ProjectIndex />
            </main>
        </>
    );
}
