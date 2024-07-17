"use client";

import { metadata as solvingAWoodenPuzzleMetadata } from "#root/app/posts/(content)/solving-a-wooden-puzzle/page.mdx";
import { metadata as sqliteTransactionsMetadata } from "#root/app/posts/(content)/transactions-with-pythons-sqlite3-package/page.mdx";
import PostHeading from "../mini-projects/PostHeading";
import PostSnippet from "./PostSnippet";

const postMetadata = [
  {
    ...solvingAWoodenPuzzleMetadata,
    href: "/posts/solving-a-wooden-puzzle",
  },
  {
    ...sqliteTransactionsMetadata,
    href: "/posts/transactions-with-pythons-sqlite3-package",
  },
];

export default function PostIndex() {
  return postMetadata.map(function (metadata) {
    return (
      <article key={metadata.href}>
        <PostHeading
          url={metadata.href}
          title={metadata.title}
          date={metadata.date}
        />
        <PostSnippet>{metadata.description}</PostSnippet>
      </article>
    );
  });
}
