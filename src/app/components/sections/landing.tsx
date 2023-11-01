import React from "react";

import Image from "next/image";
import texts from "../../../../contents/texts";
import { machina, redhat } from "../exports";

export default function Landing() {
  return (
    <>
      <div className="w-11/12 h-screen flex-col lg:flex-row  items-center lg:gap-16 flex ">
        <div className=" h-full  flex-col justify-center items-center gap-4 flex">
          <div
            className="lg:mr-10 text-center lg:text-left text-2xl md:text-5xl lg:text-5xl 
                        md:leading-10 lg:leading-tight font-extrabold  leading-[30px]"
            style={machina.style}
          >
            <span className="text-white ">We </span>
            <span className=" imho-gradient-text-to-b">Design</span>
            <span className="text-white "> Highly Functional and Robust </span>
            <span className="imho-gradient-text-to-r ">Products</span>
            <span className="text-white"> & Processes</span>
          </div>
          <div
            className=" md:w-5/6  text-center lg:text-left lg:w-full text-stone-300 text-opacity-50
                             text-base md:text-lg lg:text-xl font-normal  leading-normal"
            style={redhat.style}
          >
            {texts.home}
          </div>
        </div>
        {/* image for dektop */}
        <div className="w-full max-w-full  justify-center hidden lg:flex  ">
          <Image
            src="/images/pile.png"
            alt="image"
            sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
            height={1084}
            width={650}
          />
        </div>

        {/* image for mobile and tablet */}
        <div className="w-full max-w-full flex  justify-center lg:hidden  ">
          <Image
            src="/images/hero-image-md.png"
            alt="image"
            sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
            height={1084}
            width={650}
          />
        </div>
      </div>
    </>
  );
}
