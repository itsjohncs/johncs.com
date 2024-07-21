import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.scss";
import Script from "next/script";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "johncs.com",
    description: "John Sullivan's personal website and blog.",
};

const lightModeCheck = `try {
    const llDarkMode = JSON.parse(localStorage.getItem("DARK_MODE"));
    if (llDarkMode === "yes") {
        document.body.classList.add("force-dark-mode");
    } else if (llDarkMode === "no") {
        document.body.classList.add("force-light-mode");
    }
} catch (e) {
    console.warn("Got error checking dark mode preference.", e);
}`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sourceCodePro.className} suppressHydrationWarning>
                <script dangerouslySetInnerHTML={{ __html: lightModeCheck }} />
                {children}
            </body>
        </html>
    );
}
