import type { MDXComponents } from "mdx/types";
import { CodeBlock, CodeBlockBody } from "./mdx/CodeBlock";
import { SuperScript, SuperScriptLink } from "./mdx/SuperScript";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    code: CodeBlockBody,
    sup: SuperScript,
    a: function (props) {
      if ((props as { ["data-footnote-ref"]?: boolean })["data-footnote-ref"]) {
        return <SuperScriptLink {...props} />;
      } else {
        return <a {...props} />;
      }
    },
    ...components,
  };
}
