import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import { Navbar, Slider, Dropdown } from "./components/exports";

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
      <body className={inter.className}>
        <Navbar />
        <Slider />
        <Dropdown />
        {children}
        {/* Add footer here */}
      </body>
    </html>
  );
}
