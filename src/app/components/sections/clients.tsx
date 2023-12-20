import React from "react";
import Image from "next/image";

import { machina } from "../exports";
import { client } from "../../../../content/mapped-content";
import Motion, { childVariants } from "@/app/framer";

export default function Clients() {
  return (
    <div
      className={`w-full flex-col justify-center items-center gap-10 lg:gap-20 flex py-20 ${machina.className}`}
    >
      <div className="text-center sub-heading leading-tight">
        <span className="text-white  ">Some </span>
        <span className="imho-gradient-text-to-r  ">Clients</span>
        <span className="text-white  "> and </span>
        <span className="imho-gradient-text-to-b  ">Partners</span>
      </div>

      <Motion childVariants={childVariants}>
        <div className="w-full flex justify-center items-center">
          <div className=" grid grid-cols-3 md:grid-cols-6 lg:grid-cols-4 gap-x-10 gap-y-2 lg:gap-y-28 lg:gap-x-52">
            {client.map((item, index) => (
              <div
                key={index}
                className="flex w-24 h-24 lg:w-36 lg:h-24 items-center justify-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </Motion>
    </div>
  );
}
