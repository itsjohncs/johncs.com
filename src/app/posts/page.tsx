import Link from "next/link";
import PostIndex from "./PostIndex";
import NavBar from "#root/shared-components/NavBar";

export default function Posts() {
    return (
        <>
            <NavBar path="/posts" />
            <main>
                <PostIndex />
            </main>
        </>
    );
}
