import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import classNames from "classnames";
import PostDate from "./PostDate";
import LightDarkModeToggle from "./LightDarkModeToggle";
import { PiRssSimpleBold as RssIcon } from "react-icons/pi";

interface Props {
    title: string;
    href: string;
    date: string;
}

function Right() {
    return (
        <div className={styles.right}>
            <LightDarkModeToggle />
            <Link
                className={classNames(styles.pageLink, styles.rssIconContainer)}
                href="/rss.xml"
            >
                <RssIcon className={styles.rssIcon} />
            </Link>
        </div>
    );
}

export function PostNavBar({ title, href, date }: Props): ReactElement {
    return (
        <nav className={classNames(styles.navBar, styles.post)}>
            <ul className={styles.left}>
                <li>
                    <Link className={styles.pageLink} href="/">
                        johncs.com
                    </Link>
                </li>
                <li>
                    <Link className={styles.pageLink} href="/posts">
                        Blog Posts
                    </Link>
                </li>
                <li>
                    {title}{" "}
                    <PostDate>
                        <Link href={href}>{date}</Link>
                    </PostDate>
                </li>
            </ul>
            <Right />
        </nav>
    );
}

interface NavBarProps {
    path: "/" | "/posts" | "/mini-projects";
}

export default function NavBar({ path }: NavBarProps): ReactElement {
    return (
        <nav className={styles.navBar}>
            <div className={styles.left}>
                {path === "/" ? (
                    <span>johncs.com</span>
                ) : (
                    <Link className={styles.pageLink} href="/">
                        johncs.com
                    </Link>
                )}
                <span className={styles.colon}>:</span>{" "}
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
                            <Link
                                className={styles.pageLink}
                                href="/mini-projects"
                            >
                                Mini Projects
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
            <Right />
        </nav>
    );
}
