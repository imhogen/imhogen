import React from "react";

import Image from "next/image";
import { machina, redhat } from "../exports";
import { portfolio } from "../../../../content/mapped-content";

export default function Card() {
  return (
    <>
      {portfolio.map((item, index) => (
        <div
          className={`w-full h-fit justify-around flex flex-col items-center mx-auto ${
            index % 2 === 0 ? " lg:flex-row" : " lg:flex-row-reverse"
          }`}
          key={index}
        >
          {/* text */}
          <div className="flex flex-col w-full md:w-11/12 lg:w-2/5  text-center md:text-left gap-5">
            <h1 className="text-lg font-bold lg:text-xl text-white opacity-80 ">
              {item.count}
            </h1>
            <h1 className="text-lg  font-bold lg:text-xl text-white opacity-80 ">
              {item.title}
            </h1>
            <p className="descriptive-text-portfolio text-center md:text-left">
              {item.description}
            </p>
          </div>
          {/* image */}
          <div className="flex justify-center items-center h-96  md:mt-20 w-11/12 md:w-full lg:w-fit ">
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
