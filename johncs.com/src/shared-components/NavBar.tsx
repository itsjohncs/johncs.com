import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import classNames from "classnames";

export function PostNavBar({ title }: { title: string }): ReactElement {
  return (
    <nav className={classNames(styles.navBar, styles.post)}>
      <ul>
        <li>
          <Link href="/">blog.johncs.com</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>{title}</li>
      </ul>
    </nav>
  );
}

export default function NavBar(): ReactElement {
  return (
    <nav className={styles.navBar}>
      <Link href="/">blog.johncs.com</Link>:{" "}
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/mini-projects">Mini Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
