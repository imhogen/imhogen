import React from "react";
import Image from "next/image";

import { machina } from "../exports";
import { client } from "../../../../content/mapped-content";

export default function Clients() {
  return (
    <div
      className="w-full flex-col justify-center items-center gap-10 lg:gap-20 flex"
      style={machina.style}
    >
      <div className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
        <span className="text-white text-2xl ">Some </span>
        <span className="imho-gradient-text-to-r text-2xl ">Clients</span>
        <span className="text-white text-2xl "> and </span>
        <span className="imho-gradient-text-to-b text-2xl ">Partners</span>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-24 lg:gap-52">
          {client.map((item, index) => (
            <div
              key={index}
              className="flex w-24 h-24 lg:w-36 lg:h-24 items-center justify-center"
            >
              <Image src={item.src} alt={item.alt} width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
