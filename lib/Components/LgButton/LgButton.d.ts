import React from "react";
import "../../index.css";
interface DarkButtonProps {
    onClick?: () => void;
    variant?: "primary" | "secondary" | "success" | "danger";
    children?: React.ReactNode;
}
export declare const LgButton: ({ children, variant, onClick }: DarkButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
