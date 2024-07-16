import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./mdx/CodeBlock";
import { PreProvider } from "./mdx/PreContext";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => <PreProvider>{children}</PreProvider>,
    code: CodeBlock,
    ...components,
  };
}
