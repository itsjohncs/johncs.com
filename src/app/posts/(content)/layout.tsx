import Link from "next/link";
import { ReactNode } from "react";

export default function PostLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main>{children}</main>
            <footer>
                <div aria-hidden={true}>--</div>
                <Link href="/posts">« more posts</Link> | follow me via{" "}
                <a href="https://twitter.com/itsjohncs">twitter</a> or{" "}
                <Link href="/rss.xml">RSS</Link>
            </footer>
        </>
    );
}
