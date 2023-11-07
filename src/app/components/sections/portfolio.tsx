import React from "react";
import Card from "../cards/card-2";
import { machina } from "../exports";

export default function Portfolio() {
  return (
    <div
      className="  w-full h-fit flex-col  justify-center items-center gap-10 flex"
      id="portfolio"
    >
      <section
        className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
        style={machina.style}
      >
        Some Portfolio
      </section>

      <section className="">
        <Card />
      </section>
    </div>
  );
}
