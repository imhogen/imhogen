"use client";

import { Input } from "./input-field";

const SearchBox = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="relative">
        <div className="flex items-center">
          <Input
            className="rounded-md pr-20"
            placeholder="Search for a blog..."
          />
          <div className="ml-2 flex items-center">
            <div className="w-10 h-10 bg-[#EF7D00] rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
