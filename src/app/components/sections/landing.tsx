import React from "react";
import localFont from "@next/font/local";

import Image from "next/image";
import texts from "../../../../contents/texts";

const machina = localFont({
  src: "../../../../fonts/NeueMachina-Ultrabold.otf",
});
const redhat = localFont({
  src: "../../../../fonts/RedHatDisplay-VariableFont_wght.ttf",
});

export default function Landing() {
  return (
    <>
      <div className="w-full h-fit flex-col lg:flex-row justify-center items-center gap-16 flex">
        <div className=" h-full  flex-col justify-start items-center gap-4 flex">
          <div
            className="lg:mr-10 text-center lg:text-left"
            style={machina.style}
          >
            <span className="text-white text-2xl md:text-5xl lg:text-5xl md:leading-10 lg:leading-tight font-extrabold  leading-[30px]">
              We{" "}
            </span>
            <span
              className="text-2xl md:text-5xl md:leading-10 lg:leading-tight lg:text-5xl font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-b from-[#EF7D00] to-amber-200 leading-[30px]"
            >
              Design
            </span>
            <span className="text-white text-2xl md:text-5xl lg:text-5xl md:leading-10 lg:leading-tight font-extrabold  leading-[30px]">
              {" "}
              Highly Functional and Robust{" "}
            </span>
            <span
              className="text-2xl md:text-5xl lg:text-5xl md:leading-10 lg:leading-tight font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-r from-[#EF7D00] to-amber-200 leading-[30px]"
            >
              Products
            </span>
            <span className="text-white text-2xl md:text-5xl lg:text-5xl md:leading-10 font-extrabold leading-[30px]">
              {" "}
              & Processes
            </span>
          </div>
          <div
            className=" md:w-5/6  text-center lg:text-left lg:w-full text-stone-300 text-opacity-50
                             text-base md:text-lg lg:text-xl font-normal  leading-normal"
            style={redhat.style}
          >
            {texts.home}
          </div>
        </div>
        <div className="w-full max-w-full flex  justify-center ">
          <Image
            src="/images/pile.png"
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
