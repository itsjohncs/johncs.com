import Link from "next/link";
import ProjectIndex from "./ProjectIndex";
import NavBar from "../NavBar";

export default function MiniProjects() {
  return (
    <>
      <NavBar />
      <main>
        <p>
          Here are some of the (roughly) one-night projects I&apos;ve made.
          Quality not at all guaranteed.
        </p>
        <ProjectIndex />
      </main>
    </>
  );
}
