"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks } from "../../../../content/mapped-content";

function Slider() {
  const [open, setOpen] = useState(false);

  // looks like this declaration is not being used
  const sidebarVariants = {
    hidden: { x: "100%", transition: { type: "tween", duration: 0.5 } },
    visible: { x: 0, transition: { type: "tween", duration: 0.5 } },
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="px-10 bg-transparent hidden fixed 
                    w-full lg:hidden h-20 py-4 my-5 rounded-lg justify-between items-center align-middle
                    md:inline-flex top-0 z-50"
      >
        <Link href="/">
          <Image
            src="/images/golden-eye.webp"
            alt="logo-golden-eye"
            width={50}
            height={60}
          />
        </Link>

        <div>
          <div
            className={`flex flex-row h-10 px-3 py-5 bg-transparent rounded-lg ${
              open && "border border-1 border-opacity-20"
            }
                       border-gray-300 border-opacity-100 div-with-bg-and-blur
                       justify-start items-center gap-3`}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  initial={{ maxWidth: 0 }}
                  animate={{ maxWidth: open ? "42rem" : "0rem" }}
                  exit={{ maxWidth: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-row h-10 py-1 gap-8 items-center"
                >
                  {navLinks.map((link, index) => (
                    <Link key={index} href={link.href} passHref>
                      <p
                        className="text-white text-opacity-60 text-sm font-light leading-normal transition duration-2000 ease align-middle"
                        onClick={handleLinkClick}
                      >
                        {link.link}
                      </p>
                    </Link>
                  ))}
                  <div className="px-4 py-2 bg-[#ef7d00] rounded-md justify-center items-center gap-2.5 flex ">
                    {/* TODO: make contact button functional */}
                    <Link
                      href="/"
                      className="text-white text-sm font-semibold leading-tight"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.span>
              ) : (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EF7D00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(true)}
                  className="cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
