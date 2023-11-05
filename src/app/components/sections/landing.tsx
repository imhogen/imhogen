import React from "react";

import Image from "next/image";
import texts from "../../../../content/text-content";
import { machina, redhat } from "../exports";

export default function Landing() {
  return (
    <>
      {/* the inline css style = {machina.style} would be worked on to follow best practices */}
      <section className="w-full h-full lg:h-screen flex-col lg:flex-row  items-center gap-10 lg:gap-16 flex">
        <article className="   flex-col justify-center  gap-4 flex">
          <div
            className=" lg:mr-10 text-center lg:text-left text-xl md:text-4xl lg:text-5xl 
                         lg:leading-tight font-extrabold  leading-[30px]"
            style={machina.style}
          >
            <span className="text-white ">We </span>
            <span className=" imho-gradient-text-to-b">Design</span>
            <span className="text-white "> Highly Functional and Robust </span>
            <span className="imho-gradient-text-to-r ">Products</span>
            <span className="text-white"> & Processes</span>
          </div>
          <div
            className=" md:w-5/6 mx-auto text-center lg:text-left lg:w-full descriptive-text-home"
            style={redhat.style}
          >
            {texts.home}
          </div>
        </article>
        {/* image for desktop */}
        <div className="w-full max-w-full  justify-center  hidden lg:flex ">
          <Image
            src="/images/pile.png"
            alt="hero-image"
            layout="responsive"
            loading="lazy" // we may eventually use a loading skeleton for this(depends on what is best)
            height={1084}
            width={650}
          />
        </div>

        {/* image for mobile and tablet */}
        <div className="w-full max-w-full flex justify-center items-center lg:hidden ">
          <Image
            src="/images/hero-image-md.png"
            alt="hero-image"
            layout="responsive"
            loading="lazy"
            height={1084}
            width={650}
          />
        </div>
      </section>
    </>
  );
}
