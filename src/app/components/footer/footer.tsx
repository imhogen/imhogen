import Link from "next/link";
import Image from "next/image";

import ContactForm from "../ui/contact-form";
import { socialMedia } from "../../../../content/mapped-content";
import { calligraffitti, machina, redhat } from "../exports";
const Footer = () => {
  return (
    <footer
      className="mx-6 mt-20 mb-10 w-11/12 h-fit p-5 rounded-md
                     gap-4 md:gap-4 flex-col justify-start items-center
                     inline-flex border border-1
                     border-gray-200 border-opacity-20"
      id="contact"
    >
      {/* medium and large screens only */}
      <div
        className={`${redhat.className} md:flex justify-between w-full items-center hidden`}
      >
        <div className="text-white text-sm">
          KBI KNUST, Commercial Area
          <br />
          Kumasi, Ghana
        </div>
        <div className="flex flex-col items-end">
          <div className="text-white text-sm">admin@imhogen.com</div>
          <div className="text-white text-sm">
            +233 501 654 825 / +233 553 812 626
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-200 bg-opacity-20 hidden md:block"></div>
      <section className="flex flex-col items-center md:flex-row w-full gap-4 justify-between">
        <div className="w-4/5 flex gap-2 md:flex-col justify-center md:w-2/5 lg:w-1/5 lg:gap-4">
          <Link href="/">
            <Image
              src="/images/golden-eye.webp"
              alt="logo-golden-eye"
              width={60}
              height={70}
            />
          </Link>
          <div>
            <span>
              <p
                className={`text-white text-md md:text-2xl leading-5 ${machina.className}`}
              >
                Innovate <br /> Make and <br /> Have Ours <br />
                LTD.
              </p>
              <p
                className={`text-white text-sm pt-2 ${calligraffitti.className}`}
              >
                Make it real
              </p>
            </span>
          </div>
        </div>

        {/* mobile devices only */}
        <div
          className={`flex flex-col text-center justify-between w-full items-center md:hidden ${redhat.className}`}
        >
          <div className="text-white text-sm">
            KBI KNUST, Commercial Area
            <br />
            Kumasi, Ghana
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="imho-contacts">admin@imhogen.com</div>
            <div className="imho-contacts">
              +233 501 654 825 / +233 553 812 626
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-200 bg-opacity-20 md:hidden"></div>

        <div className="flex justify-between w-full  md:justify-end ">
          {/* contact form */}
          <ContactForm />
        </div>
      </section>

      <div className="h-[1px] w-full   bg-gray-200 bg-opacity-20"></div>
      <div className="w-full flex flex-col justify-between items-center gap-3">
        <div
          className={`text-white text-opacity-70 text-sm leading-[21px] ${redhat.className}`}
        >
          &copy; {new Date().getFullYear()} {"  "}
          IMHO. All rights reserved.
        </div>
        <div className="justify-start items-center gap-5 flex">
          {socialMedia.map((icons) => (
            <Link href={icons.link} key={icons.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                {icons.linkrect && <rect width="4" height="12" x="2" y="9" />}
                {icons.linkcircle && <circle cx="4" cy="4" r="2" />}

                {icons.instarect && (
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                )}

                {icons.instaline && (
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                )}
                <path d={icons.path} />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
