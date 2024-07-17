"use client";

import { metadata as solvingAWoodenPuzzleMetadata } from "#root/app/posts/(content)/solving-a-wooden-puzzle/page.mdx";
import { metadata as sqliteTransactionsMetadata } from "#root/app/posts/(content)/transactions-with-pythons-sqlite3-package/page.mdx";
import { metadata as accountingExpensesMetadata } from "#root/app/posts/(content)/answering-questions-with-accounting-expenses-in-quicken-vs-ledger/page.mdx";
import { metadata as pythonImportSystemMetadata } from "#root/app/posts/(content)/the-python-import-system/page.mdx";
import { metadata as intelligentlyShorteningTextMetadata } from "#root/app/posts/(content)/intelligently-shortening-text/page.mdx";
import PostHeading from "../mini-projects/PostHeading";
import Quote from "#root/mdx/Quote";

const postMetadata = [
  {
    ...solvingAWoodenPuzzleMetadata,
    href: "/posts/solving-a-wooden-puzzle",
  },
  {
    ...sqliteTransactionsMetadata,
    href: "/posts/transactions-with-pythons-sqlite3-package",
  },
  {
    ...accountingExpensesMetadata,
    href: "/posts/answering-questions-with-accounting-expenses-in-quicken-vs-ledger",
  },
  {
    ...pythonImportSystemMetadata,
    href: "/posts/the-python-import-system",
  },
  {
    ...intelligentlyShorteningTextMetadata,
    href: "/posts/intelligently-shortening-text",
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
        <Quote>{metadata.description}</Quote>
      </article>
    );
  });
}
