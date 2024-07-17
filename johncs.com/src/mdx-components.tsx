import type { MDXComponents } from "mdx/types";
import { CodeBlock, CodeBlockBody } from "./mdx/CodeBlock";
import { SuperScript, SuperScriptLink } from "./mdx/SuperScript";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./mdx/headings";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
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
