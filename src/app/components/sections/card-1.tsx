"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { value } from "../../../../contents/mapped";
import localFont from "@next/font/local";
const machina = localFont({
  src: "../../../../fonts/NeueMachina-Ultrabold.otf",
});
const redhat = localFont({
  src: "../../../../fonts/RedHatDisplay-VariableFont_wght.ttf",
});

export default function Card() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="flex w-full h-full flex-col md:flex-row gap-5    "
    >
      {value.map((item, index) => (
        <div
          key={index}
          className="w-full lg:w-4/5 lg:mt-10 h-full lg:h-96 px-5 py-5  bg-white rounded-2xl flex-col  items-center gap-3 inline-flex"
        >
          <div className="w-48 relative">
            <img src={item.src} width={200} height={200} alt="icon" />
          </div>
          <div>
            <h1
              className=" text-black text-2xl font-extrabold text-center lg:text-left leading-8"
              style={machina.style}
            >
              {item.title}
            </h1>
            <p
              className="  text-black text-opacity-70 text-base font-normal leading-normal text-center lg:text-left "
              style={redhat.style}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
