import React from "react";
import "../../index.css"

interface DarkButtonProps {
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  children?: React.ReactNode;
}

export const LgButton = ({ children, variant = "primary" , onClick}: DarkButtonProps) => {
  return (
    <button
      className={`w-full py-2 px-4 rounded-sm flex items-center justify-between ${
        variant === "primary" ? "bg-black text-white mb-6" :
        variant === "secondary" ? "bg-[#E8EDF1] text-black mb-6" :
        variant === "success" ? "bg-[#005EEA] text-white my-10" :
        variant === "danger" ? "bg-red-500 text-white" : ""
      }`}
      onClick={onClick}

    >
      {children}
    </button>
  );
};
