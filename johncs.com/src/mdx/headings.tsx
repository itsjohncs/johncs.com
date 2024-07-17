import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./headings.module.scss";

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return function Heading({
    children,
    className,
    ...props
  }: HTMLAttributes<HTMLHeadingElement>) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const prefix = "#".repeat(level);
    return React.createElement(
      Tag,
      { className: classNames(styles.heading, className), ...props },
      <React.Fragment>
        <span aria-hidden="true">{prefix}</span> {children}
      </React.Fragment>,
    );
  };
}

export const Heading1 = createHeading(1);
export const Heading2 = createHeading(2);
export const Heading3 = createHeading(3);
export const Heading4 = createHeading(4);
export const Heading5 = createHeading(5);
export const Heading6 = createHeading(6);
