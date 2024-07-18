import PostMetadata from "./PostMetadata";
import { PostNavBar } from "#root/shared-components/NavBar";
import { ReactNode } from "react";

export default function withMetadata(metadata: PostMetadata) {
    return function post({ children }: { children: ReactNode }) {
        return (
            <>
                <PostNavBar
                    title={metadata.post.title}
                    date={metadata.post.date}
                    href={metadata.post.href}
                />
                {children}
            </>
        );
    };
}
