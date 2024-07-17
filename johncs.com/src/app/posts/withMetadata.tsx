import PostMetadata from "./PostMetadata";
import NavBar from "#root/app/NavBar";
import { ReactNode } from "react";

export default function withMetadata(metadata: PostMetadata) {
  return function post({ children }: { children: ReactNode }) {
    return (
      <>
        <NavBar />
        {children}
      </>
    );
  };
}
