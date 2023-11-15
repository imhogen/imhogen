"use client";
import { Shell } from "../components/ui/shell";
import {
  Dropdown,
  Navbar,
  Slider,
  machina,
  redhat,
} from "../components/exports";

import SearchBox from "../components/ui/search-box";
import Tabs from "../components/ui/blog-tabs";
import { SetStateAction, useState } from "react";
import Card from "../components/cards/blog-card";

export default function page() {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden items-center overflow-y-hidden max-w-screen mx-auto">
      <Navbar />
      <Dropdown />
      <Slider />
      {/* hero */}
      <Shell className="blog-hero-background w-screen relative top-[4.5rem] md:top-[8rem] lg:top-0 gap-10 lg:gap-36 ">
        <div style={machina.style} className="flex flex-col gap-5 ">
          <div className="mx-auto">
            <span className="text-white sub-heading font-extrabold leading-10">
              All{" "}
            </span>
            <span className="imho-gradient-text-to-r sub-heading font-extrabold leading-10">
              Blog{" "}
            </span>
            <span className="text-white sub-heading font-extrabold leading-10">
              Posts{" "}
            </span>
          </div>

          {/* search */}

          <SearchBox />
        </div>
      </Shell>

      {/* tabs */}
      <Shell className="relative md:items-start flex-col gap-5  md:flex-row">
        <Tabs />
        <Card />
      </Shell>

      <Shell></Shell>
    </main>
  );
}
