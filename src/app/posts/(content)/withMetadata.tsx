import PostMetadata from "./PostMetadata";
import { PostNavBar } from "#root/shared-components/NavBar";
import { ReactNode } from "react";

export default function withMetadata(metadata: PostMetadata) {
    return function post({ children }: { children: ReactNode }) {
        return (
            <>
                <PostNavBar
                    title={metadata.title}
                    date={metadata.date}
                    href={metadata.href}
                />
                {children}
            </>
        );
    };
}
