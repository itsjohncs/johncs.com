import type { MDXComponents } from "mdx/types";
import { Highlight, themes } from "prism-react-renderer";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ children, className }) => {
      if (!className || typeof children !== "string") {
        return <code>{children}</code>;
      } else {
        const language = className.replace(/language-/gm, "");
        return (
          <Highlight theme={themes.vsLight} code={children} language={language}>
            {({
              className: highlightClassName,
              style,
              tokens,
              getLineProps,
              getTokenProps,
            }) => (
              <code className={highlightClassName} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </code>
            )}
          </Highlight>
        );
      }
    },
    ...components,
  };
}
