import localFont from "@next/font/local";
import React from "react";
import Card from "./card-1";

const redhat = localFont({
  src: "../../../../fonts/RedHatDisplay-VariableFont_wght.ttf",
});
const machina = localFont({
  src: "../../../../fonts/NeueMachina-Ultrabold.otf",
});
export default function Value() {
  return (
    <div className="w-full mt-10 lg:mt-20 text-center" style={machina.style}>
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight">
        Our Unique{" "}
      </span>
      <span
        className="text-transparent bg-clip-text
                    bg-gradient-to-r from-[#EF7D00] to-amber-200  text-2xl md:text-3xl 
                    lg:text-4xl font-bold  leading-tight"
      >
        Value
      </span>
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight">
        {" "}
        and Where We{" "}
      </span>
      <span
        className="text-transparent bg-clip-text
                    bg-gradient-to-r from-[#EF7D00] to-amber-200  text-2xl md:text-3xl 
                    lg:text-4xl font-bold  leading-tight"
      >
        Excel
      </span>
      {/* cards  */}

      <Card />
    </div>
  );
}
