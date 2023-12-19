import React from "react";

import Image from "next/image";

import { team } from "../../../../content/mapped-content";
import Motion, { childVariants } from "@/app/framer";

export default function Card() {
  return (
    <>
      {team.map((item, index) => (
        <div
          className={`w-full h-fit justify-around flex flex-col items-center mx-auto ${
            index % 2 === 0 ? " lg:flex-row" : " lg:flex-row-reverse"
          }`}
          key={index}
        >
          {/* text */}

          <div className="flex flex-col md:w-11/12 lg:w-2/5 gap-5">
            <Motion childVariants={childVariants}>
              <h1 className="text-lg text-center md:text-left font-bold lg:text-xl text-white opacity-80 ">
                {item.title}
              </h1>
              <p className="descriptive-text-portfolio text-center md:text-left ">
                {item.description}
              </p>
            </Motion>
          </div>

          {/* image */}
          <div className="flex justify-center items-center h-96  md:mt-20 md:w-11/12 lg:w-fit ">
            <div>
              <Image
                src={item.Src}
                alt={item.alt}
                height={600}
                width={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
