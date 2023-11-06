import React from "react";
import Card from "../cards/card-1";
import { machina } from "../exports";

export default function Value() {
  return (
    <div className="w-full  text-center  " style={machina.style} id="value">
      <div className="sub-heading  leading-tight">
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
