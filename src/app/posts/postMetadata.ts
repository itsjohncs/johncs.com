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
import { metadata as productFeedbackMetadata } from "#root/app/posts/(content)/passing-through-advice-to-actual-user-experiences/page.mdx";
import { metadata as typosInSearchQueriesMetadata } from "#root/app/posts/(content)/typos-in-search-queries-at-khan-academy/page.mdx";
import { metadata as ellipseOverlapMetadata } from "#root/app/posts/(content)/which-grid-cells-does-an-ellipse-overlap/page.mdx";
import { metadata as gptAssistedHtmlResume } from "#root/app/posts/(content)/gpt-assisted-html-resume/page.mdx";

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
    productFeedbackMetadata,
    typosInSearchQueriesMetadata,
    ellipseOverlapMetadata,
    gptAssistedHtmlResume,
];

// Sort posts by date, newest first
postMetadata.sort((a, b) => Date.parse(b.post.date) - Date.parse(a.post.date));

export default postMetadata;
