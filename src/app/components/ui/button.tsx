import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string; // Allow custom classes to be passed
}

function Button({ className, text, ...rest }: ButtonProps) {
  // Combine the default button classes with any custom classes passed
  const buttonClasses = `bg-white text-black rounded p-2 ${className || ""}`;

  return (
    <button className={buttonClasses} {...rest}>
      {text}
    </button>
  );
}

export default Button;
