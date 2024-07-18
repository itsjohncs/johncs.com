import React from "react";
import styles from "./RedBold.module.scss";

interface RedBoldProps {
    children: React.ReactNode;
}

const RedBold: React.FC<RedBoldProps> = ({ children }) => {
    return <span className={styles.redBold}>{children}</span>;
};

export default RedBold;
