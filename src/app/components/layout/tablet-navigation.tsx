"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { text: "Home", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Our Process", href: "/process" },
  { text: "Our Team", href: "/team" },
  { text: "Blog", href: "/blog" },
];

function Slider() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: "100%", transition: { type: "tween", duration: 0.5 } },
    visible: { x: 0, transition: { type: "tween", duration: 0.5 } },
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed px-10 bg-transparent backdrop-blur-xl w-full lg:hidden h-20 py-4 rounded-lg justify-between items-center inline-flex top-0 z-50">
        <Link href="/">
          <img
            className="w-10 h-12"
            src="/images/golden-eye.png"
            alt="logo-golden-eye"
          />
        </Link>

        <div>
          <div
            className=" flex flex-row h-10 px-4 py-2 bg-transparent rounded-lg border border-1
                       border-gray-300 border-opacity-100 backdrop-blur-2xl 
                       justify-start items-center gap-3 "
          >
            {isOpen && (
              <motion.span
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: "42rem" }}
                transition={{ duration: 0.5 }}
                className="flex flex-row h-10 py-1 gap-8"
              >
                {links.map((link, index) => (
                  <Link key={index} href={link.href} passHref>
                    <p
                      className="text-white text-opacity-60 text-sm font-light leading-normal transition duration-2000 ease"
                      onClick={handleLinkClick}
                    >
                      {link.text}
                    </p>
                  </Link>
                ))}
                <div className="px-2 py-2 bg-white rounded-md justify-center items-center gap-2.5 flex">
                  <Link
                    href="/contact"
                    className="text-black text-sm font-semibold  leading-tight"
                  >
                    Contact
                  </Link>
                </div>
              </motion.span>
            )}
            {isOpen ? (
              ""
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </motion.svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
