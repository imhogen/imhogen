// import { useMediaQuery } from "react-responsive";
import type { Metadata } from "next";

import "./globals.css";
import {
  Navbar,
  Slider,
  Dropdown,
  redhat,
  machina,
} from "./components/exports";
import Footer from "./components/footer/footer";
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
      <body className={` ${redhat.variable} `}>
        {/* {!hideNavAndFooter && <Navbar />}
        {!hideNavAndFooter && <Dropdown />}
        {!hideNavAndFooter && <Slider />} */}

        {children}
        {!hideNavAndFooter && <Footer />}
      </body>
    </html>
  );
}
