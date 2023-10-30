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
      <div className=" relative  w-full h-screen  items-center inline-flex">
        <div className="flex-col w-1/2 justify-center items-start gap-8 inline-flex">
          <div style={machina.style}>
            <span
              className="text-white text-5xl font-extrabold 
                            font-['Neue Machina']
                           leading-[60px]"
            >
              We{" "}
            </span>
            <span
              className="text-5xl font-extrabold  dark:shadow-xl mt-5 
                    text-transparent bg-clip-text
                    bg-gradient-to-b from-[#EF7D00] to-amber-200
                    text-center leading-[60px]"
            >
              Design
            </span>
            <span
              className="text-white text-5xl font-extrabold font-['Neue Machina'] 
                            leading-[60px]"
            >
              {" "}
              Highly Functional and Robust{" "}
            </span>
            <span
              className=" text-5xl font-extrabold  dark:shadow-xl mt-5 
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-[#EF7D00] to-amber-200
                    text-center leading-[60px]"
            >
              Products
            </span>
            <span
              className="text-white text-5xl font-extrabold font-['Neue Machina'] 
                            leading-[60px]"
            >
              {" "}
              & Processes
            </span>
          </div>
          <div
            className="self-stretch text-stone-300 text-opacity-50 text-xl 
            font-normal "
            style={redhat.style}
          >
            {texts.home}
          </div>
        </div>
        <div
          className="w-1/2 h-[660px] py-[50px] bg-gradient-to-l  rounded-tr-[48px]
                 rounded-br-[48px]
                 flex-col  inline-flex"
        >
          <div className="w-full self-stretch grow shrink basis-0 relative">
            <Image src="/images/pile.png" alt="image" layout="fill" />
          </div>
        </div>
      </div>
    </>
  );
}
