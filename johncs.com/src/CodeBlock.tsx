import React from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  if (!className) {
    return <code>{children}</code>;
  }

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
