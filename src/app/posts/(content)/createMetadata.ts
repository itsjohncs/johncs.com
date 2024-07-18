import PostMetadata from "./PostMetadata";

/**
 * Creates post page metadata.
 *
 * The post's `metadata` is read by NextJS and used to populate the meta tags
 * for the page. This function ensures we create a good `Metadata` object for
 * NextJS while preserving all the original information about each post.
 */
export default function createMetadata(
    metadata: PostMetadata["post"],
): PostMetadata {
    return {
        title: `${metadata.title} | johncs.com`,
        post: metadata,
    };
}
