import type { ReactNode } from "react";
export default interface PostMetadata {
    title: string;
    date: string;
    href: string;
    description: ReactNode;
}
