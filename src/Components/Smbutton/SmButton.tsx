import React from "react";
import "../../index.css"

interface SmButtonProps {
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  children?: React.ReactNode;
}

export const SmButton = ({ children, variant = "primary", onClick }: SmButtonProps) => {
  return (
    <button
      className={`py-2 px-3 rounded-md text-xs ${
        variant === "primary" ? "bg-black text-white" :
        variant === "secondary" ? "bg-[#E8EDF1] text-black" :
        variant === "success" ? "bg-[#024097] text-white" :
        variant === "danger" ? "bg-red-500 text-white" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
