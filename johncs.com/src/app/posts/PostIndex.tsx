"use client";

import { metadata as solvingAWoodenPuzzleMetadata } from "#root/app/posts/(content)/solving-a-wooden-puzzle/page.mdx";
import { metadata as sqliteTransactionsMetadata } from "#root/app/posts/(content)/transactions-with-pythons-sqlite3-package/page.mdx";
import { metadata as accountingExpensesMetadata } from "#root/app/posts/(content)/answering-questions-with-accounting-expenses-in-quicken-vs-ledger/page.mdx";
import { metadata as accountingReimbursementsMetadata } from "#root/app/posts/(content)/answering-questions-with-accounting-reimbursements/page.mdx";
import { metadata as accountingSharedReimbursementsMetadata } from "#root/app/posts/(content)/answering-questions-with-accounting-shared-reimbursements/page.mdx";
import { metadata as pythonImportSystemMetadata } from "#root/app/posts/(content)/the-python-import-system/page.mdx";
import { metadata as intelligentlyShorteningTextMetadata } from "#root/app/posts/(content)/intelligently-shortening-text/page.mdx";
import { metadata as localStorageTodayMetadata } from "#root/app/posts/(content)/local-storage-today/page.mdx";
import { metadata as buildingSimpleSiteMetadata } from "#root/app/posts/(content)/principles-of-building-a-simple-site/page.mdx";
import { metadata as dndSeesawRoomMetadata } from "#root/app/posts/(content)/the-seesaw-a-dnd-5e-encounter/page.mdx";
import { metadata as loopTerminationMetadata } from "#root/app/posts/(content)/a-very-practical-piece-of-pure-cs/page.mdx";
import { metadata as haskellMonadsMetadata } from "#root/app/posts/(content)/haskell-monads-and-the-nest-of-lies/page.mdx";
import PostHeading from "#root/shared-components/PostHeading";
import Quote from "#root/mdx/Quote";

const postMetadata = [
    solvingAWoodenPuzzleMetadata,
    sqliteTransactionsMetadata,
    accountingExpensesMetadata,
    accountingReimbursementsMetadata,
    accountingSharedReimbursementsMetadata,
    pythonImportSystemMetadata,
    intelligentlyShorteningTextMetadata,
    localStorageTodayMetadata,
    buildingSimpleSiteMetadata,
    dndSeesawRoomMetadata,
    loopTerminationMetadata,
    haskellMonadsMetadata,
];

// Sort posts by date, newest first
postMetadata.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

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
