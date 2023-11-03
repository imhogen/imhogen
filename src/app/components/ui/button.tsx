import React from "react";
import { ButtonProps } from "../../../../Types";

function Button({ className, text, ...rest }: ButtonProps) {
  // Combine the default button classes with any custom classes passed
  const buttonClasses = `text-white rounded p-2 bg-[#ef7d00]${className || ""}`;

  return (
    <button className={buttonClasses} {...rest}>
      {text}
    </button>
  );
}

export default Button;
