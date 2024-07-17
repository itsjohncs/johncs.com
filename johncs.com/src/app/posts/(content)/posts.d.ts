declare module "#root/app/posts/(content)/*.mdx" {
  import PostMetadata from "./PostMetadata";
  export const metadata: PostMetadata;
}
