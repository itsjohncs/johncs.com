import type { MDXComponents } from "mdx/types";
import { CodeBlock, CodeBlockBody } from "./mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    code: CodeBlockBody,
    ...components,
  };
}
