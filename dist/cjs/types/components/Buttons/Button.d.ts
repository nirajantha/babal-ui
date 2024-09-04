import React from "react";
export interface buttonProps {
    type?: string;
    title: string;
    licenseKey: string;
    click: () => void;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    icon?: React.ReactNode;
    hover?: boolean;
    hoverStyle?: React.CSSProperties;
}
declare const BabalButton: ({ title, licenseKey, click, style, width, height, icon, hover, hoverStyle, type, }: buttonProps) => React.JSX.Element;
export default BabalButton;
