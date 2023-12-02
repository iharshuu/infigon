import "../index.css";
interface Lightprops {
    onClick?: () => void;
    label: string;
}
export declare const LightButton: ({ label, ...props }: Lightprops) => import("react/jsx-runtime").JSX.Element;
export {};
