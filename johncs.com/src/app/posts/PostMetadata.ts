import type { ReactNode } from "react";
export default interface PostMetadata {
  title: string;
  date: string;
  url: string;
  description: ReactNode;
}
