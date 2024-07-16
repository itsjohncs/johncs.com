declare module "#root/app/mini-projects/projects/*.mdx" {
    interface MiniProjectMetadata {
        title: string;
        date: string;
        url: string;
    }
    export const metadata: MiniProjectMetadata;
}
