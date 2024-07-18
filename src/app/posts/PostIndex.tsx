"use client";

import PostHeading from "#root/shared-components/PostHeading";
import Quote from "#root/mdx/Quote";
import postMetadata from "./postMetadata";

export default function PostIndex() {
    return postMetadata.map(function ({ post }) {
        return (
            <article key={post.href}>
                <PostHeading
                    url={post.href}
                    title={post.title}
                    date={post.date}
                />
                <Quote>{post.description}</Quote>
            </article>
        );
    });
}
