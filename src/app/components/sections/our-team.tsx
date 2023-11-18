import React from "react";
import Card from "../cards/card-4";
import { machina } from "../exports";

export default function Team() {
  return (
    <div
      className="  w-full h-fit flex-col  justify-center items-center gap-10 flex pt-10 pb-20"
      id="team"
    >
      <section
        className="text-white text-center sub-heading font-bold leading-tight"
        style={machina.style}
      >
        Our <span className="imho-gradient-text-to-r">Team</span>
      </section>

      <section className="">
        <Card />
      </section>
    </div>
  );
}
