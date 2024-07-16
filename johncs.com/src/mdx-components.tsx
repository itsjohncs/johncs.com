import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ children, className }) => {
      if (typeof children !== "string") {
        return <code>{children}</code>;
      }
      return <CodeBlock className={className}>{children}</CodeBlock>;
    },
    ...components,
  };
}
