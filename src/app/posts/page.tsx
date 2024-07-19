import Link from "next/link";
import PostIndex from "./PostIndex";
import NavBar from "#root/shared-components/NavBar";

export default function Posts() {
    return (
        <>
            <NavBar path="/posts" />
            <main>
                <p>
                    Subscribe to new posts via <Link href="/rss.xml">RSS</Link>{" "}
                    or by following me on{" "}
                    <a href="https://x.com/itsjohncs">X</a>.
                </p>
                <PostIndex />
            </main>
        </>
    );
}
