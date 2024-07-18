import NavBar from "#root/shared-components/NavBar";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <NavBar path="/" />
            <main className={styles.main}>
                <div className={styles.floatingHead}>
                    <Link href="/me.jpg">
                        <img
                            src="/me.jpg"
                            alt="John Sullivan"
                            className={styles.selfie}
                        />
                    </Link>
                </div>
                <div>
                    <p>
                        Welcome to my corner of the internet! I put silly things
                        here like{" "}
                        <Link href="./blog-index.htm">blog posts</Link> and{" "}
                        <Link href="./mini-projects-index.htm">
                            itty-bitty projects
                        </Link>
                        .
                    </p>
                    <p>
                        I used to work at{" "}
                        <a href="https://www.khanacademy.org">Khan Academy</a>{" "}
                        but now I&apos;m doing some other stuff you can read
                        about at <a href="http://johncs.com">johncs.com</a>. I
                        spend my free time juggling, practicing magic tricks,
                        swinging around on silks, and DMing D&D.
                    </p>
                    <p>
                        Looking for more info on me? Check out my{" "}
                        <a href="http://johnsullivan.name">resume-portfolio</a>,{" "}
                        <a href="http://github.com/itsjohncs">GitHub profile</a>
                        , or <a href="http://twitter.com/itsjohncs">twitter</a>.
                    </p>
                </div>
            </main>
        </>
    );
}
