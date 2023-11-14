"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../../../content/mapped-content";

function Dropdown() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="fixed px-5  w-full md:hidden 
                  h-20 py-4  justify-between items-center inline-flex top-0 z-30 "
      >
        <Link href="/" className="z-20">
          <Image
            src="/images/golden-eye.webp"
            alt="logo-golden-eye"
            width={40}
            height={50}
          />
        </Link>
        <AnimatePresence>
          {open ? (
            <>
              <motion.span
                initial={{ maxHeight: 0 }}
                animate={{ maxHeight: open ? "100vh" : "0rem" }}
                exit={{ maxHeight: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-fit pt-20 pb-4 px-4 gap-8 items-center w-full 
                         bg-black rounded-lg shadow-lg absolute left-0 top-0 div-with-bg-and-blur-nav overflow-hidden"
              >
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.href} passHref>
                    <p
                      className="text-white text-opacity-60 text-sm font-light leading-normal
                                 transition duration-500 ease align-middle"
                      onClick={handleLinkClick}
                    >
                      {link.link}
                    </p>
                  </Link>
                ))}
                <div className="w-full px-4 py-2 bg-[#ef7d00] rounded-md justify-center items-center gap-2.5 flex shadow-md">
                  {/* TODO: make contact button functional */}
                  <Link
                    href="#"
                    className="text-white text-sm font-semibold leading-tight "
                  >
                    Contact
                  </Link>
                </div>
              </motion.span>
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
                onClick={() => setOpen(false)}
                className="z-20"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </>
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
              onClick={() => setOpen(true)}
              className=""
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Dropdown;
