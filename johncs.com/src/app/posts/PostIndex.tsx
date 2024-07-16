"use client";

import { metadata as solvingAWoodenPuzzleMetadata } from "#root/app/posts/(content)/solving-a-wooden-puzzle/page.mdx";
import PostHeading from "../mini-projects/PostHeading";

const postMetadata = [
  {
    ...solvingAWoodenPuzzleMetadata,
    href: "/posts/solving-a-wooden-puzzle",
  },
];

export default function PostIndex() {
  return postMetadata.map(function (metadata) {
    return (
      <PostHeading
        key={metadata.href}
        url={metadata.href}
        title={metadata.title}
        date={metadata.date}
      />
    );
  });
}
