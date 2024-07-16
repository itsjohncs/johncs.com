declare module "#root/app/posts/(content)/*.mdx" {
  interface MiniProjectMetadata {
    title: string;
    date: string;
    url: string;
  }
  export const metadata: MiniProjectMetadata;
}
