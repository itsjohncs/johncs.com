"use client";

import PostHeading from "#root/shared-components/PostHeading";
import Quote from "#root/mdx/Quote";
import postMetadata from "./postMetadata";

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
