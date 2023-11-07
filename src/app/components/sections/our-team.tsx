import React from "react";
import Card from "../cards/card-4";
import { machina } from "../exports";

export default function Team() {
  return (
    <div className="  w-full h-fit flex-col  justify-center items-center gap-10 flex" id="team">
      <section
        className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
        style={machina.style}
      >
        Our Team
      </section>

      <section className="">
        <Card />
      </section>
    </div>
  );
}
