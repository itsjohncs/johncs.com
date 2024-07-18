import NavBar from "#root/shared-components/NavBar";
import styles from "./page.module.scss";
import Link from "next/link";
import { ReactNode } from "react";

function LinkListItem({ children }: { children: ReactNode }) {
    return (
        <div className={styles.linkListItem} role="listitem">
            <span className={styles.bullet} aria-hidden={true}>
                {" * "}
            </span>
            {children}
        </div>
    );
}

export default function Home() {
    return (
        <>
            <NavBar path="/" />
            <main className={styles.main}>
                <div className={styles.selfieCell}>
                    <img
                        src="/me.jpg"
                        alt="John Sullivan"
                        className={styles.selfie}
                    />
                </div>
                <div className={styles.aboutMe}>
                    <ul className={styles.flatList}>
                        <li>
                            <b>John C Sullivan</b>
                        </li>
                        <li>
                            Lead SWE & Founder @{" "}
                            <a href="https://shmeppy.com">Shmeppy</a>
                        </li>
                        <li>
                            Senior SWE @{" "}
                            <a href="https://khanacademy.org">Khan Academy</a>{" "}
                            (Former)
                        </li>
                    </ul>
                    <div className={styles.linkList} role="list">
                        <LinkListItem>
                            <a href="mailto:johnsullivan.pem@gmail.com">
                                Email
                            </a>
                        </LinkListItem>
                        <LinkListItem>
                            <a href="https://github.com/itsjohncs">GitHub</a>
                        </LinkListItem>
                        <LinkListItem>
                            <a href="https://www.linkedin.com/in/john-sullivan-7696b621a/">
                                LinkedIn
                            </a>
                        </LinkListItem>
                        <LinkListItem>
                            <a href="https://x.com/itsjohncs">X</a>
                        </LinkListItem>
                        <LinkListItem>
                            <a href="https://tech.lgbt/@johncs">Mastodon</a>
                        </LinkListItem>
                        <LinkListItem>
                            <a href="https://resume.johncs.com">Resume</a> (
                            <a href="https://resume.johncs.com/resume.pdf">
                                PDF
                            </a>
                            )
                        </LinkListItem>
                        <LinkListItem>
                            <a href="https://lichess.org/@/johncs">Lichess</a>
                        </LinkListItem>
                    </div>
                </div>
            </main>
        </>
    );
}
