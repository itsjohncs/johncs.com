import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => <>{children}</>,
    code: CodeBlock,
    ...components,
  };
}
