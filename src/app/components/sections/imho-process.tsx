import Image from "next/image";
import React from "react";
import { machina } from "../exports";

export default function Process() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-start items-center gap-10">
        <div className="text-center sub-heading" style={machina.style}>
          <span className="imho-gradient-text-to-r font-extrabold leading-10">
            IMHO’s
          </span>
          <span className="text-white font-extrabold leading-10"> Process</span>
        </div>
        <div className="w-full max-w-4/5">
          <div className="relative w-full " style={{ paddingTop: "130%" }}>
            <Image
              src="/images/imho_process.png"
              alt="imhos process"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
