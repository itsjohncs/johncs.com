import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.scss";
import NavBar from "./NavBar";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blog.johncs.com",
  description: "John Sullivan's blog and mini projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} single-column-content`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
