import React from "react";
import Card from "./card-1";
import { machina } from "../exports";

export default function Value() {
  return (
    <div className="w-full mt-10 lg:mt-20 text-center" style={machina.style}>
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight">
        Our Unique{" "}
      </span>
      <span
        className="imho-gradient-text-to-b  text-2xl md:text-3xl 
                    lg:text-4xl font-bold  leading-tight"
      >
        Value
      </span>
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight">
        {" "}
        and Where We{" "}
      </span>
      <span
        className="imho-gradient-text-to-b  text-2xl md:text-3xl 
                    lg:text-4xl font-bold  leading-tight"
      >
        Excel
      </span>
      {/* cards  */}

      <Card />
    </div>
  );
}
