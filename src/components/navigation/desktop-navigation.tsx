import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../content/mapped-content";
import { redhat } from "../../lib/exports";

function Navbar() {
  return (
    <>
      <div className="hidden fixed mt-2 lg:inline-flex w-11/12 h-20 py-2 rounded-lg justify-between items-center  top-0 z-50">
        <Link href="/">
          <Image
            src="/images/golden-eye.webp"
            alt="logo-golden-eye"
            width={60}
            height={70}
          />
        </Link>

        <div
          className="px-4 py-2  rounded-lg border border-1
                     border-gray-200 border-opacity-20  
                     justify-start items-center gap-8 flex div-with-bg-and-blur"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-white text-opacity-60 text-base font-light 
                       leading-normal hover:text-opacity-80
                        transition duration-2000 ease ${redhat.className}`}
            >
              {link.link}
            </Link>
          ))}
          <div
            className={`px-4 py-2 bg-[#ef7d00] rounded-md justify-center items-center 
                      gap-2.5 flex text-white text-base font-normal ${redhat.className} `}
          >
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
