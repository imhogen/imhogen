import React from "react";
import Card from "./card-1";
import { machina } from "../exports";

export default function Value() {
  return (
    <div
      className="w-full mt-10 lg:mt-20 text-center gap-10 lg:gap-20"
      style={machina.style}
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight">
        <span className="text-white ">Our Unique </span>
        <span className="imho-gradient-text-to-r ">Value</span>
        <span className="text-white "> and Where We </span>
        <span className="imho-gradient-text-to-b  ">Excel</span>
      </div>
      {/* cards  */}

      <Card />
    </div>
  );
}
