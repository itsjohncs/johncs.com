import React, { ReactNode } from "react";
import { Highlight } from "prism-react-renderer";
import styles from "./CodeBlock.module.scss";
import { usePreContext } from "./PreContext";

interface CodeBlockProps {
  children?: ReactNode;
  className?: string;
}

function except<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(function (key) {
    delete result[key];
  });
  return result;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const isUnderPre = usePreContext();

  if (!isUnderPre) {
    return <code className={styles.inlineCodeBlock}>{children}</code>;
  }

  if (!className || typeof children !== "string") {
    return <code className={styles.codeBlock}>{children}</code>;
  }

  const language = className.replace(/language-/gm, "");

  return (
    <Highlight code={children} language={language}>
      {function ({ tokens, getLineProps, getTokenProps }) {
        return (
          <code className={styles.codeBlock}>
            {tokens.map(function (line, i) {
              return (
                <div key={i} {...except(getLineProps({ line }), ["style"])}>
                  {line.map(function (token, key) {
                    return (
                      <span
                        key={key}
                        {...except(getTokenProps({ token }), ["style"])}
                      />
                    );
                  })}
                </div>
              );
            })}
          </code>
        );
      }}
    </Highlight>
  );
}
