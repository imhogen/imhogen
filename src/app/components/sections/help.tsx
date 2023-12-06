import React from "react";
import Card from "../cards/Card-3";

export default function Help() {
  return (
    <div
      className="w-full text-center py-20 flex flex-col gap-10 font-machina"
      id="value"
    >
      <div className="sub-heading leading-tight ">
        <span className="text-white ">Let Us </span>
        <span className="imho-gradient-text-to-r ">Help</span>
      </div>
      {/* our value and where we excel  cards  */}

      <Card />
    </div>
  );
}
