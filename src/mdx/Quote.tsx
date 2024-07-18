import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Quote.module.scss";

export default function Quote({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLQuoteElement>) {
    return (
        <blockquote
            className={classNames(styles.quoteContainer, className)}
            {...props}
        >
            <div className={styles.quoteGutter} aria-hidden="true">
                {">".repeat(20)}
            </div>
            <div className={styles.quoteSnippet}>{children}</div>
        </blockquote>
    );
}
