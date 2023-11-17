"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { link } from "../../../../content/mapped-content";
import { easeInOut } from "framer-motion/dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // const handleLinkClick = () => {
  //   let openState = isOpen;
  //   setIsOpen(!openState);
  // };

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Adjust the delay time as needed
  };

  //prevents scrolling when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.position = "static";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.position = "static";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="fixed px-5 w-full md:hidden 
                  h-20 py-4 justify-between items-center inline-flex top-0 z-30"
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
          {isOpen ? (
            <>
              <motion.span
                initial={{ maxHeight: 0, opacity: 0 }} // Initial state: invisible and no height
                animate={{ maxHeight: isOpen ? "100vh" : "0rem", opacity: 1 }} // Visible state: full height and fully visible
                exit={{ maxHeight: 0, opacity: 0 }} // Exit state: no height and invisible
                transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration and easing function
                className="flex flex-col h-fit pt-16 pb-4 px-4 items-center w-full bg-black rounded-lg shadow-lg absolute left-0 top-0 div-with-bg-and-blur-nav"
              >
                {link.map((link, index) => (
                  <Link key={index} href={link.href} passHref>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }} // Initial state: invisible and slightly shifted up
                      animate={{ opacity: 1, y: 0 }} // Visible state: fully visible and in its original position
                      exit={{ opacity: 0, y: -10 }} // Exit state: invisible and slightly shifted up
                      transition={{
                        animate: { duration: 0.5, ease: "easeInOut" }, // Transition duration and easing function for animate state
                        exit: { duration: 0.5, ease: "easeInOut", delay: 0.5 }, // Transition duration, easing function and delay for exit state
                      }}
                      className="text-white text-opacity-60 font-light leading-normal transition duration-500 ease-in-out align-middle p-4"
                      onClick={handleLinkClick}
                    >
                      {link.text}
                    </motion.p>
                  </Link>
                ))}
                <div className="w-full px-4 py-3 bg-[#ef7d00] rounded-md justify-center items-center gap-2.5 flex shadow-md">
                  <Link
                    href="/contact"
                    className="text-white font-semibold leading-tight "
                  >
                    Contact
                  </Link>
                </div>
              </motion.span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EF7D00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => setIsOpen(false)}
                className="z-20 div-with-bg-and-blur rounded-md p-1"
              >
                {" "}
                man
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EF7D00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setIsOpen(true)}
              className="div-with-bg-and-blur rounded-md p-1"
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
