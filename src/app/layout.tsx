import type { Metadata } from "next";
import { Footer, Header } from "@/common/components";
import "./globals.scss";

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
