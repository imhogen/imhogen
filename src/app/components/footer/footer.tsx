import Link from "next/link";
import Image from "next/image";
import { machina, redhat, calligraffitti } from "../exports";
import ContactForm from "../ui/contact-form";
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
        className=" md:flex justify-between w-full items-center hidden"
        style={redhat.style}
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
                className="text-white text-md md:text-2xl leading-5 "
                style={machina.style}
              >
                Innovate <br /> Make and <br /> Have Ours <br />
                LTD.
              </p>
              <p
                className="text-white text-sm pt-2"
                style={calligraffitti.style}
              >
                Make it real
              </p>
            </span>
          </div>
        </div>

        {/* mobile devices only */}
        <div
          className="flex flex-col text-center justify-between w-full items-center md:hidden"
          style={redhat.style}
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

        <div
          className="flex justify-between w-full  md:justify-end"
          style={redhat.style}
        >
          {/* contact form */}
          <ContactForm />
        </div>
      </section>

      <div className="h-[1px] w-full   bg-gray-200 bg-opacity-20"></div>
      <div className="w-full flex flex-col justify-between items-center gap-3">
        <div
          className="text-white text-opacity-70 text-sm leading-[21px]"
          style={redhat.style}
        >
          &copy; 2023 IMHO. All rights reserved.
        </div>
        <div className="justify-start items-center gap-5 flex">
          <div className="w-6 h-6 relative">
            <Link href="https://www.linkedin.com/company/imho-ltd/">
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
          <div className="w-6 h-6 relative">
            <Link href="https://www.facebook.com/theimhogen/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
          </div>
          <div className="w-6 h-6 relative">
            <Link href="https://www.instagram.com/theimhogen/">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>
          <div className="w-6 h-6 relative">
            <Link href="https://twitter.com/theimhogen">
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
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
