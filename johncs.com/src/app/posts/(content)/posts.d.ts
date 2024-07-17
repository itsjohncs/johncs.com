declare module "#root/app/posts/(content)/*.mdx" {
  import { ReactNode } from "react";
  interface PostMetadata {
    title: string;
    date: string;
    url: string;
    description: ReactNode;
  }
  export const metadata: PostMetadata;
}
