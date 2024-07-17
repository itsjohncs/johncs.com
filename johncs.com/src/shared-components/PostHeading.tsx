import Link from "next/link";
import styles from "./PostHeading.module.scss";
import { ReactNode } from "react";

function getSlug(rawURL: string): string {
  try {
    const url = new URL(rawURL);
    const pathParts = url.pathname.split("/").filter((i) => !!i);
    if (pathParts.length === 0) {
      throw new Error("URL path is empty");
    }
    return pathParts[pathParts.length - 1];
  } catch (error) {
    throw new Error("Invalid URL: " + rawURL);
  }
}

function MaybeAnchor({
  slug,
  children,
}: {
  slug?: string;
  children: ReactNode;
}) {
  if (slug) {
    return (
      <a id={slug} className={styles.timestampAnchor} href={`#${slug}`}>
        {children}
      </a>
    );
  } else {
    return <span>{children}</span>;
  }
}

interface PostHeadingProps {
  url: string;
  title: string;
  date: string;
  anchorDate?: boolean;
}

export default function PostHeading({
  url,
  title,
  date,
  anchorDate,
}: PostHeadingProps) {
  return (
    <h3 className={styles.postHeading}>
      <span>
        <Link href={url} className={styles.postTitle}>
          {title}
        </Link>
        <time className={styles.postDate}>
          <span aria-hidden="true">[</span>
          <MaybeAnchor slug={anchorDate ? getSlug(url) : undefined}>
            {date}
          </MaybeAnchor>
          <span aria-hidden="true">]</span>
        </time>
      </span>
    </h3>
  );
}
