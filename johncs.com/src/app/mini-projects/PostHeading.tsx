import Link from "next/link";
import styles from "./PostHeading.module.scss";

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

interface PostHeadingProps {
  url: string;
  title: string;
  date: string;
}

export default function PostHeading({ url, title, date }: PostHeadingProps) {
  return (
    <div className={styles.postHeading}>
      <span>
        <Link href={url} className={styles.postTitle}>
          {title}
        </Link>
        <time className={styles.postDate}>
          <span aria-hidden="true">[</span>
          <a
            id={getSlug(url)}
            className={styles.timestampAnchor}
            href={`#${getSlug(url)}`}
          >
            {date}
          </a>
          <span aria-hidden="true">]</span>
        </time>
      </span>
    </div>
  );
}
