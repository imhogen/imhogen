import React from "react";

import Image from "next/image";
import { machina, redhat } from "../exports";
import { portfolio } from "../../../../content/mapped-content";

export default function Card() {
  return (
    <>
      {portfolio.map((item, index) => (
        <div
          className={`w-10/12 h-fit text-white justify-between flex flex-col items-center mx-auto py-10${
            index % 2 === 0 ? " lg:flex-row" : " lg:flex-row-reverse"
          }`}
          key={index}
        >
          {/* text */}
          <div className="flex flex-col w-11/12 lg:w-1/2 text-center lg:text-left gap-5">
            <span
              className="text-lg md:text-2xl lg:text-3xl "
              style={machina.style}
            >
              {item.count}
            </span>
            <span
              className="text-lg md:text-2xl lg:text-4xl"
              style={machina.style}
            >
              {item.title}
            </span>
            <span className="text-sm md:text-base" style={redhat.style}>
              {item.description}
            </span>
          </div>
          {/* image */}
          <div className="flex justify-center items-center h-96 mt-10 md:mt-20 md:w-full lg:w-fit ">
            <div>
              <Image
                src={item.Src}
                alt={item.alt}
                height={600}
                width={500}
                className="rounded-2xl"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
