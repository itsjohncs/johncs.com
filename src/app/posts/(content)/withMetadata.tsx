import PostMetadata from "./PostMetadata";
import { PostNavBar } from "#root/shared-components/NavBar";
import { ReactNode } from "react";
import Link from "next/link";

function generateGitHubUrl(partialUrl: string): string {
    // Extracts `slug` out of `/posts/slug`
    const match = partialUrl.match(/^\/posts\/([a-z0-9-]+)$/);
    if (!match) {
        throw new Error("Invalid partial URL format. Expected: /posts/slug");
    }

    const slug = match[1];

    return `https://github.com/itsjohncs/johncs.com/blob/main/src/app/posts/(content)/${slug}/page.mdx?plain=1`;
}

export default function withMetadata(metadata: PostMetadata) {
    return function post({ children }: { children: ReactNode }) {
        return (
            <>
                <PostNavBar
                    title={metadata.post.title}
                    date={metadata.post.date}
                    href={metadata.post.href}
                />
                <main>{children}</main>
                <footer>
                    <div aria-hidden={true}>--</div>
                    <Link href="/posts">« more posts</Link> | follow me via{" "}
                    <a href="https://x.com/itsjohncs">X</a> or{" "}
                    <Link href="/rss.xml">RSS</Link> |{" "}
                    <a href={generateGitHubUrl(metadata.post.href)}>source</a>
                </footer>
            </>
        );
    };
}
