import React from "react";
export interface buttonProps {
    title: string;
    licenseKey: string;
    onclick?: () => void;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    icon?: React.ReactNode;
    hover?: boolean;
    hoverStyle?: React.CSSProperties;
}
declare const BabalButton: ({ title, licenseKey, onclick, style, width, height, icon, hover, hoverStyle, }: buttonProps) => React.JSX.Element;
export default BabalButton;
