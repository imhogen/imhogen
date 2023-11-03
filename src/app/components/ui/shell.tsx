import React from "react";
import { cn } from "../lib/utils";

type ShellProps = React.HTMLAttributes<HTMLDivElement>;

const Shell: React.FC<ShellProps> = ({ children, className }: ShellProps) => {
  return (
    <div
      className={cn(
        "flex flex-col relative w-11/12  gap-20 items-center py-10 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Shell };
