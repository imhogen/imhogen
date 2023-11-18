import React from "react";
import Card from "../cards/card-2";
import { machina } from "../exports";

export default function Portfolio() {
  return (
    <div
      className="  w-full h-fit flex-col  justify-center items-center gap-10 flex pt-10"
      id="portfolio"
    >
      <section
        className="text-white text-center sub-heading font-bold leading-tight"
        style={machina.style}
      >
        Some <span className="imho-gradient-text-to-b">Portfolio</span>
      </section>

      <section className="">
        <Card />
      </section>
    </div>
  );
}
