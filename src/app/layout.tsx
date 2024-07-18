import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.scss";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "johncs.com",
    description: "John Sullivan's personal website and blog.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sourceCodePro.className}>{children}</body>
        </html>
    );
}
