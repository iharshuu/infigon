import "../index.css";
interface SmButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "blue" | "red" | "green" | "yellow";
}
export declare const SmButton: ({ label, variant, ...props }: SmButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
