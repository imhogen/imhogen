"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { text: "Home", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Our Process", href: "/process" },
  { text: "Our Team", href: "/team" },
  { text: "Blog", href: "/blog" },
];

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="fixed px-5 bg-transparent backdrop-blur-xl w-full md:hidden 
                  h-20 py-4 rounded-lg justify-between items-center inline-flex top-0 z-50"
      >
        <Link href="/">
          <Image
            className="w-10 h-12"
            src="/images/golden-eye.png"
            alt="logo-golden-eye"
            width={10}
            height={12}
          />
        </Link>

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EF7D00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setIsOpen(false)}
            className=""
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EF7D00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setIsOpen(true)}
            className=""
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </div>
    </>
  );
}

export default Dropdown;
