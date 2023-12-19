import React from "react";
import Card from "../cards/card-1";
import Motion, { childVariants } from "@/app/framer";

export default function Value() {
  return (
    <div className="w-full h-fit text-center py-20 font-machina" id="value">
      <div className="sub-heading leading-tight">
        <span className="text-white ">Our Unique </span>
        <span className="imho-gradient-text-to-r ">Value</span>
        <span className="text-white "> and Where We </span>
        <span className="imho-gradient-text-to-b  ">Excel</span>
      </div>

      {/* our value and where we excel  cards  */}

      <Card />
    </div>
  );
}
