import React from "react";

import { machina, redhat } from "../exports";
import Card from "../cards/card-2";
import Motion, { childVariants } from "@/app/framer";

export default function Portfolio() {
  return (
    <div
      className="  w-full h-fit flex-col  justify-center items-center gap-10 flex pt-10"
      id="portfolio"
    >
      <section
        className={`text-white text-center sub-heading font-bold leading-tight ${machina.className}`}
      >
        Some <span className="imho-gradient-text-to-b">Portfolio</span>
      </section>

      <Card />
    </div>
  );
}
