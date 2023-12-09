import React from "react";

import { machina } from "../exports";
import Card from "../cards/card-2";

export default function Portfolio() {
  return (
    <div
      className="  w-full h-fit flex-col  justify-center items-center gap-10 flex pt-10"
      id="portfolio"
    >
      <section className="text-white text-center sub-heading font-bold leading-tight font-machina">
        Some <span className="imho-gradient-text-to-b">Portfolio</span>
      </section>

      <section className="font-redhat">
        <Card />
      </section>
    </div>
  );
}
