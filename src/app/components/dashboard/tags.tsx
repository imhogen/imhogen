"use client";
import { useState } from "react";
import { Badge } from "./Badge";

const tags = [
  "Engineering Design",
  "Mechanical",
  "Quality Function Deployment",
  "Business",
  "Design",
  "Product Development",
  "CAD/CAM",
  "Manufacturing Processes",
  "Supply Chain Management",
  "Project Management",
  "Innovation Strategies",
  "User Experience Design",
  "Industrial Engineering",
  "Operations Management",
  "Strategic Planning",
  "Market Research",
  "Prototyping",
  "Material Science",
  "Risk Management",
  "Cost Analysis",
  "Sustainability in Design",
  "Customer Relations",
  "Brand Development",
  "Entrepreneurship",
  "Design Thinking",
  "Human-Centered Design",
  "Value Engineering",
  "Six Sigma",
  "Lean Manufacturing",
  "Business Process Improvement",
];

const Tag = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  return (
    <>
      {" "}
      <p className="">Add tags</p>
      <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar flex-wrap lg:overflow-y-auto max-h-44">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className="min-w-fit py-2  hover:cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default Tag;
