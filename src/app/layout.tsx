import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "IMHO - Innovate Make & Have Ours",
  description: "Industrial Design Enginnering Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
