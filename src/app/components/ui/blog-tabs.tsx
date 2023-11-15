"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const tabs = [
  { label: "All", path: "/blog", query: { tab: "all" } },
  { label: "Industry Trends", path: "/blog", query: { tab: "trends" } },
  { label: "Case Studies", path: "/blog", query: { tab: "studies" } },
];

// Import statements...

const Tabs = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0); // Initialize selectedTab with 0

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div
      className="flex w-full justify-center text-white text-xs md:text-lg div-with-bg-and-blur bg-transparent border 
                     border-gray-300 border-opacity-20 rounded-md p-1 md:flex-col md:w-1/2   "
    >
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          className={`flex cursor-pointer justify-center py-2 flex-1 rounded-md ${
            selectedTab === index ? "bg-[#EF7D00]" : "bg-transparent"
          }`}
          onClick={() => handleTabClick(index)}
        >
          <Link href={{ pathname: tab.path, query: tab.query }}>
            {tab.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
