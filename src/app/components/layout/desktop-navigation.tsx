import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { text: "Home", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Our Process", href: "/process" },
  { text: "Our Team", href: "/team" },
  { text: "Blog", href: "/blog" },
];

function Navbar() {
  return (
    <>
      <div className="hidden fixed  mt-5 lg:inline-flex  w-11/12 h-20 py-4 rounded-lg justify-between items-center  top-0 z-50">
        <Link href="/">
          <Image
            className="w-16 h-18"
            src="/images/golden-eye.png"
            alt="logo-golden-eye"
            width={16}
            height={18}
          />
        </Link>

        <div
          className="px-4 py-2  rounded-lg border border-1
                     border-gray-200 border-opacity-20 backdrop-blur-2xl 
                     justify-start items-center gap-8 flex"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white text-opacity-60 text-base font-light 
                       leading-normal hover:text-opacity-80
                        transition duration-2000 ease"
            >
              {link.text}
            </Link>
          ))}
          <div className="px-4 py-2 bg-[#ef7d00] rounded-md justify-center items-center gap-2.5 flex ">
            <Link
              href="/contact"
              className="text-white text-base font-normal  leading-tight"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
