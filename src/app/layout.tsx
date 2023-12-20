import type { Metadata } from "next";

import "./globals.css";

import Footer from "./components/footer/footer";
import { redhat, machina, calligraffitti } from "./components/exports";
import Navbar from "./components/navigation/desktop-navigation";
import Dropdown from "./components/navigation/mobile-navigation";
import Slider from "./components/navigation/tablet-navigation";
interface RootLayoutProps {
  children: React.ReactNode;
  hideNavAndFooter?: boolean;
}

export const metadata: Metadata = {
  title: "IMHO - Innovate Make & Have Ours",
  description: "Engineering Design Company",
};

export default function RootLayout({
  children,
  hideNavAndFooter = false,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        <Dropdown />
        <Slider />

        {children}
        <Footer />
      </body>
    </html>
  );
}
