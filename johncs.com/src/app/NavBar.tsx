import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar(): React.ReactElement {
  return (
    <nav className={styles.navBar}>
      <Link href="/">blog.johncs.com</Link>:
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
