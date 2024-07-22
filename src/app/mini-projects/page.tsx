import Link from "next/link";
import ProjectIndex from "./ProjectIndex";
import NavBar from "#root/shared-components/NavBar";

export default function MiniProjects() {
    return (
        <>
            <NavBar path="/mini-projects" />
            <main>
                <ProjectIndex />
            </main>
        </>
    );
}
