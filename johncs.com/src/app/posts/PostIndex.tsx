"use client";

import { metadata as samplePostMetadata } from "#root/app/posts/sample-post/page.mdx";
import PostHeading from "../mini-projects/PostHeading";

const postMetadata = [
  {
    ...samplePostMetadata,
    href: "/posts/sample-post",
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
