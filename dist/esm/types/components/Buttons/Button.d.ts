import React from 'react';
export interface buttonProps {
    title: string;
    key: string;
    onclick?: () => void;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    icon?: React.ReactNode;
    hover?: boolean;
    hoverStyle?: React.CSSProperties;
}
declare const BabalButton: ({ title, key, onclick, style, width, height, icon, hover, hoverStyle }: buttonProps) => React.JSX.Element | undefined;
export default BabalButton;
