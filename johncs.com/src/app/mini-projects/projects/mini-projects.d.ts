declare module "#root/app/mini-projects/projects/*.mdx" {
    import { MDXContent } from "mdx/types";
    const content: MDXContent;
    export default content;

    interface MiniProjectMetadata {
        title: string;
        date: string;
        url: string;
    }
    export const metadata: MiniProjectMetadata;
}
