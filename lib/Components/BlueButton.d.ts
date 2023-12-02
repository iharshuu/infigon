import "../index.css";
interface Blueprops {
    onAuth?: () => void;
    label: string;
}
export declare const BlueButton: ({ label, onAuth, ...props }: Blueprops) => import("react/jsx-runtime").JSX.Element;
export {};
