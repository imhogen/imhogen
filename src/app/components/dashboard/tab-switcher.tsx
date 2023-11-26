"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { machina, redhat } from "../exports";

const links = [
  { name: "Analytics", href: "/admin" },
  { name: "New Blog", href: "/admin/blog" },
];

const TabSwitcher = () => {
  const pathname = usePathname();

  return (
    <div
      className={`text-sm font-medium text-center text-gray-500 border-b border-gray-200 border-opacity-20 dark:text-gray-400 dark:border-gray-700 `}
    >
      <ul className="flex flex-wrap -mb-px">
        {links.map(({ name, href }) => (
          <li key={name} className="me-2">
            <Link
              href={href}
              className={cn(
                "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ",
                pathname === href &&
                  "text-[#ef7d00] border-[#ef7d00] dark:border-[#ef7d00]"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSwitcher;
