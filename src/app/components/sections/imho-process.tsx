import Image from "next/image";
import React from "react";
import { machina } from "../exports";

export default function Process() {
  return (
    <div>
      <div className="w-full h-screen  flex-col justify-start items-center gap-10 inline-flex">
        <div className="text-center sub-heading" style={machina.style}>
          <span className=" imho-gradient-text-to-r  font-extrabold leading-10">
            IMHO’s
          </span>
          <span className="text-white  font-extrabold leading-10">
            {" "}
            Process
          </span>
        </div>
        <div className="w-full h-full lg:w-4/5  justify-center  inline-flex">
          <Image
            className="grow shrink basis-0 self-stretch"
            src="/images/imho_process.png"
            alt="imhos process"
            width={720}
            height={940}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
