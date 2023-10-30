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
      <div className="w-[340px] h-[490px] flex-col justify-start items-start gap-16 inline-flex">
        <div className="self-stretch h-[226px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center " style={machina.style}>
            <span className="text-white text-3xl font-extrabold  leading-[30px]">
              We{" "}
            </span>
            <span
              className="text-3xl font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-b from-[#EF7D00] to-amber-200 leading-[30px]"
            >
              Design
            </span>
            <span className="text-white text-3xl font-extrabold  leading-[30px]">
              {" "}
              Highly Functional and Robust{" "}
            </span>
            <span
              className="text-3xl font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-r from-[#EF7D00] to-amber-200 leading-[30px]"
            >
              Products
            </span>
            <span className="text-white text-3xl font-extrabold leading-[30px]">
              {" "}
              & Processes
            </span>
          </div>
          <div
            className="self-stretch text-center text-stone-300 text-opacity-50 text-base font-normal  leading-normal"
            style={redhat.style}
          >
            {texts.home}
          </div>
        </div>
        <div className="w-full max-w-full ">
          <Image
            src="/images/pile.png"
            alt="image"
            sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
            height={1024}
            width={600}
          />
        </div>
      </div>
    </>
  );
}
