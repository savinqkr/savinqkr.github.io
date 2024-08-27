import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Footer, Header } from "@/common/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savin",
  description: "Savin Park's devlog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
