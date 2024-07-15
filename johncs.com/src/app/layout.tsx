import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.scss";
import BodyContent from '../components/BodyContent';

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
      <BodyContent className={`${sourceCodePro.className} single-column-content`}>
        {children}
      </BodyContent>
    </html>
  );
}
