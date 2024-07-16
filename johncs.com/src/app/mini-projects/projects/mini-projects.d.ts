declare module "#root/app/mini-projects/projects/*.mdx" {
    import {Element} from "react";
    interface MiniProjectMetadata {
        title: string;
        date: string;
        url: string;
    }
    export const metadata: MiniProjectMetadata;
    export default Element;
}
