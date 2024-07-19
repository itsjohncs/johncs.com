import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import withMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMdx({
    options: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeKatex] },
})(nextConfig);
