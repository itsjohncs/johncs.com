import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import classNames from "classnames";
import PostDate from "./PostDate";

interface Props {
    title: string;
    href: string;
    date: string;
}

export function PostNavBar({ title, href, date }: Props): ReactElement {
    return (
        <nav className={classNames(styles.navBar, styles.post)}>
            <ul>
                <li>
                    <Link className={styles.pageLink} href="/">
                        blog.johncs.com
                    </Link>
                </li>
                <li>
                    <Link className={styles.pageLink} href="/posts">
                        Posts
                    </Link>
                </li>
                <li>
                    {title}{" "}
                    <PostDate>
                        <Link href={href}>{date}</Link>
                    </PostDate>
                </li>
            </ul>
        </nav>
    );
}

interface NavBarProps {
    path: "/" | "/posts" | "/mini-projects";
}

export default function NavBar({ path }: NavBarProps): ReactElement {
    return (
        <nav className={styles.navBar}>
            {path === "/" ? (
                <span>johncs.com</span>
            ) : (
                <Link className={styles.pageLink} href="/">
                    johncs.com
                </Link>
            )}
            :{" "}
            <ul>
                <li>
                    {path === "/posts" ? (
                        <span>Blog Posts</span>
                    ) : (
                        <Link className={styles.pageLink} href="/posts">
                            Blog Posts
                        </Link>
                    )}
                </li>
                <li>
                    {path === "/mini-projects" ? (
                        <span>Mini Projects</span>
                    ) : (
                        <Link className={styles.pageLink} href="/mini-projects">
                            Mini Projects
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
