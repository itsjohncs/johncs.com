import React from "react";
import { Highlight } from "prism-react-renderer";
import styles from "./CodeBlock.module.scss";

interface CodeBlockProps {
  children: string;
  className?: string;
}

const except = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

export function CodeBlock({ children, className }: CodeBlockProps) {
  if (!className) {
    return <code>{children}</code>;
  }

  const language = className.replace(/language-/gm, "");

  return (
    <Highlight code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <code className={styles.codeBlock}>
          {tokens.map((line, i) => (
            <div key={i} {...except(getLineProps({ line }), ["style"])}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...except(getTokenProps({ token }), ["style"])}
                />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
}
