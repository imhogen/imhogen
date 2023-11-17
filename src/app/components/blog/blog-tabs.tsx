"use client";
import Link from "next/link";

import React, { useState } from "react";

const tabs = [
  {
    label: "All",
    path: "/blog/",
    query: { tab: "all" },
  },
  {
    label: "Industry Trends",
    path: "/blog/trending",
    query: { tab: "trends" },
  },
  {
    label: "Case Studies",
    path: "/blog/case",
    query: { tab: "studies" },
  },
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize selectedTab with 0

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <section className="text-white w-full flex md:flex-col md:w-64 rounded-md border border-gray-700 border-opacity-50 p-2">
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          className={`flex cursor-pointer justify-center lg:justify-start lg:pl-4 py-1 flex-1 rounded-md ${
            selectedTab === index ? "bg-[#EF7D00]" : "bg-transparent"
          }`}
          onClick={() => handleTabClick(index)}
        >
          <Link href={tab.path} className="text-sm ">
            {tab.label}
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Tabs;
