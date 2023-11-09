import Link from "next/link";
import Image from "next/image";
import { machina, redhat, calligraffitti } from "../exports";
const Footer = () => {
  return (
    <footer
      className="mx-6 mt-20 mb-10 w-11/12 h-fit p-3 md:p-7 rounded-xl 
                     gap-10 md:gap-2 flex-col justify-start items-center
                     inline-flex   border border-1
                     border-gray-200 border-opacity-20"
    >
      {/* medium and large screens only */}
      <div className=" md:flex justify-between w-full items-center hidden">
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
      <div className="h-[0.1px] w-full   bg-gray-200 bg-opacity-20 hidden md:block"></div>
      <section className="flex flex-col  md:flex-row w-full gap-5 ">
        <div className="w-4/5 flex gap-10 justify-start md:flex-col md:justify-center md:w-2/5 lg:w-1/5 md:gap-0">
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
                Innovate Make and Have Ours LTD.
              </p>
              <p
                className="text-white text-xs  pt-2"
                style={calligraffitti.style}
              >
                Make it real
              </p>
            </span>
          </div>
        </div>

        {/*  */}
        <div
          className="flex flex-row  justify-between w-full items-center md:hidden"
          style={redhat.style}
        >
          <div className="text-white text-xs  mb-3">
            KBI KNUST, Commercial Area
            <br />
            Kumasi, Ghana
          </div>
          <div className="flex flex-col ">
            <div className="text-white text-xs text-right">
              admin@imhogen.com
            </div>
            <div className="text-white text-xs text-right">
              +233 501 654 825
            </div>
            <div className="text-white text-xs text-right">
              +233 553 812 626
            </div>
          </div>
        </div>
        <div className="h-[0.1px] w-full   bg-gray-200 bg-opacity-20 md:hidden"></div>

        <div
          className="flex justify-between w-full md:justify-end"
          style={redhat.style}
        >
          {/* contact form */}
          <form className="w-full md:w-4/5 lg:w-2/5 text-white flex flex-col mx-auto md:mx-0">
            <h1 className="text-white">Send us a message</h1>

            <div className="w-full flex gap-2 py-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-3/4 bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg grow text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-3/4 bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg text-sm"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent p-2 border-gray-100 border border-opacity-30 rounded-lg text-sm"
            />
            <div className="rounded-lg border-gray-100 border border-opacity-30 my-2 flex flex-col grow">
              <textarea
                className="bg-transparent w-full outline-none resize-none flex grow text-sm p-2"
                placeholder="Type your message here"
              />
              <div className="w-8 h-6 px-2 py-1 bg-[#EF7D00] rounded-lg justify-start items-center gap-2.5 inline-flex m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-paperclip"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-9 px-4 py-2 bg-[#EF7D00] rounded-lg justify-center items-center gap-2.5 inline-flex"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="h-[0.1px] w-full   bg-gray-200 bg-opacity-20"></div>
      <div className="w-full flex flex-col justify-between items-center gap-3">
        <div className="text-white text-opacity-70 text-sm leading-[21px]">
          &copy; 2023 IMHO. All rights reserved.
        </div>
        <div className="justify-start items-center gap-5 flex">
          <div className="w-6 h-6 relative">
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
          </div>
          <div className="w-6 h-6 relative">
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
          </div>
          <div className="w-6 h-6 relative">
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
          </div>
          <div className="w-6 h-6 relative">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
