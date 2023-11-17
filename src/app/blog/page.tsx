"use client";

import { useState } from "react";
import Tabs from "../components/blog/blog-tabs";

import { Navbar, Dropdown, Slider, machina } from "../components/exports";
import SearchBox from "../components/ui/search-box";
import { Shell } from "../components/ui/shell";
import Hero from "../components/ui/hero";
import Card from "../components/cards/blog-card";

export default function page() {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  return (
    <main
      className="md:border-l border-gray-700  border-opacity-50  md:pl-10 
                    flex flex-col min-h-screen overflow-x-hidden items-center 
                    overflow-y-hidden max-w-screen mx-auto "
    >
      <Card />
    </main>
  );
}
