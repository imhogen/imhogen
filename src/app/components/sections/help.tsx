import React from "react";
import Card from "../cards/card-3";
import Motion, { childVariants } from "@/app/framer";
import { machina } from "../exports";

export default function Help() {
  return (
    <div className="w-full text-center py-20 flex flex-col gap-10 " id="value">
      {" "}
      <div className={`sub-heading leading-tight ${machina.className} `}>
        <span className="text-white ">Let Us </span>
        <span className="imho-gradient-text-to-r ">Help</span>
      </div>
      {/* our value and where we excel  cards  */}
      <Card />
    </div>
  );
}
