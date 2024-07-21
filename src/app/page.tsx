import { Heading1 } from "#root/mdx/headings";
import UnorderedList from "#root/mdx/UnorderedList";
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
                        <li>Full-Stack Software Engineer</li>
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
                <div className={styles.bio}>
                    <p>
                        As a child back in 2004 I found{" "}
                        <a href="https://books.google.com/books/about/Teach_Yourself_Visual_Basic_5_in_24_Hour.html?id=xCLwe6CY6zwC">
                            an old Visual Basic 5 book
                        </a>{" "}
                        and was captured by the fascinating world of coding.
                        Fast-forward to today, and I&apos;ve had the privilege
                        of building software for{" "}
                        <a href="https://khanacademy.org">
                            an ed-tech non-profit
                        </a>
                        ,{" "}
                        <a href="https://www.shmeppy.com/">
                            my own bootstrapped startup
                        </a>
                        ,{" "}
                        <a href="https://www.mozilla.org/">
                            an open-source browser
                        </a>
                        ,{" "}
                        <a href="https://www.jetheaddev.com/">
                            a set-top box manufacturer
                        </a>
                        ,{" "}
                        <a href="https://www.youtube.com/c/PrimerLearning">
                            an educational YouTuber
                        </a>
                        ,{" "}
                        <a href="https://www.color-track.com/">
                            a quality-control hardware company
                        </a>
                        , and more.
                    </p>
                    <p>
                        Now I&apos;m on the job market! I&apos;m looking for
                        senior/staff+ level software engineering roles,
                        especially those that:
                    </p>
                    <UnorderedList>
                        <li>Have diverse, kind, and hyper-competent teams.</li>
                        <li>Pay well.</li>
                        <li>Are remote or based in Portland, Oregon.</li>
                        <li>Have an outsized impact on many users.</li>
                    </UnorderedList>
                    <p>
                        Please{" "}
                        <a href="mailto:johnsullivan.pem@gmail.com">
                            reach out
                        </a>{" "}
                        if you have a role in mind for me.
                    </p>
                </div>
            </main>
        </>
    );
}
