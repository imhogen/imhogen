import Image from "next/image";
import React from "react";
import { blogPosts } from "../../../../content/mapped-content";
import { redhat } from "../exports";

export default function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 ">
      {blogPosts.map((item, index) => (
        <div
          key={index}
          className="w-full flex-1  p-4 bg-white rounded-lg flex-col justify-center items-start gap-4 inline-flex"
          style={redhat.style}
        >
          <Image
            className=" h-fit rounded-lg w-full"
            src={item.src}
            height={100}
            width={100}
            alt="blog-card-picture"
          />
          <div className="  flex-col justify-center items-start gap-2 flex">
            <div className=" text-black text-lg font-extrabold leading-snug">
              {item.title}
            </div>
            <div className=" text-black text-opacity-70 text-base font-normal  leading-normal">
              {item.description}
            </div>
          </div>
          <div className="py-2 rounded-md justify-center items-center gap-2.5 inline-flex">
            <div className="text-amber-600 text-base font-semibold  leading-tight">
              READ ME
            </div>
            <div className="w-4 h-4 relative" />
          </div>
        </div>
      ))}{" "}
    </div>
  );
}
