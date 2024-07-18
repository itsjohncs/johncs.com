import type { Metadata } from "next";
import type { ReactNode } from "react";
export default interface PostMetadata extends Metadata {
    post: {
        title: string;
        date: string;
        href: string;
        description: ReactNode;
    };
}
