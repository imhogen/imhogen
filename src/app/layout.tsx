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

export const metadata: Metadata = {
  title: "IMHO - Innovate Make & Have Ours",
  description: "Engineering Design Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <html lang="en">
      <body className={`  ${redhat.variable} `}>
        <Navbar />
        <Dropdown />
        <Slider />
        {children}
        {/* Add footer here */}
      </body>
    </html>
  );
}
