import React from "react";
import Image from "next/image";

import { client } from "../../../../contents/mapped";
import { machina } from "../exports";

export default function Clients() {
  return (
    <div
      className="w-full flex-col justify-center items-center gap-10 flex"
      style={machina.style}
    >
      <div className="text-center">
        <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Some{" "}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-amber-200 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Clients
        </span>
        <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          {" "}
          and{" "}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-amber-200 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Partners
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-28">
          {client.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={item.src} alt="image" width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
