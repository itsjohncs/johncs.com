import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./UnorderedList.module.scss";

export default function UnorderedList({
    className,
    ...rest
}: HTMLAttributes<HTMLUListElement>) {
    return <ul className={classNames(styles.list, className)} {...rest} />;
}
