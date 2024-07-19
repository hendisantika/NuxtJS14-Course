import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My application main title",
    description: "This is the main description of the application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <header className="px-8 py-5 text-xl border-b">s.id/hendisantika</header>
      <div>{children}</div>
    </html>
  );
}
