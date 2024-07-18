import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./Table.module.scss";

export default function Table({
    className,
    ...rest
}: HTMLAttributes<HTMLTableElement>) {
    return <table className={classNames(styles.table, className)} {...rest} />;
}
