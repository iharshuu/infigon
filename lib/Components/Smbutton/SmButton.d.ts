import React from "react";
import "../../index.css";
interface SmButtonProps {
    onClick?: () => void;
    variant?: "primary" | "secondary" | "success" | "danger";
    children?: React.ReactNode;
}
export declare const SmButton: ({ children, variant, onClick }: SmButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
