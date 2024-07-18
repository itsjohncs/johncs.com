import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./OrderedList.module.scss";

export default function OrderedList({
    className,
    ...rest
}: HTMLAttributes<HTMLOListElement>) {
    return <ol className={classNames(styles.list, className)} {...rest} />;
}
