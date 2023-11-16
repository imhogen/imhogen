import Image from "next/image";
import React from "react";
import { machina } from "../exports";

export default function Process() {
  return (
    <div>
      <div
        className="w-screen  h-full flex flex-col justify-start items-center gap-10 py-20"
        id="process"
      >
        <div className="text-center sub-heading" style={machina.style}>
          <span className="imho-gradient-text-to-r font-extrabold leading-10">
            IMHO’s
          </span>
          <span className="text-white font-extrabold leading-10"> Process</span>
        </div>
        <div className="w-full  max-w-4/5 ">
          <div
            className="w-full lg:w-2/5 mx-auto relative pb-48"
            style={{ paddingTop: "50%" }}
          >
            <Image
              src="/images/imho_process.webp"
              alt="imho's process"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
