import React from 'react';

interface buttonProps {
    title: string;
    onclick: () => void;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    hover?: boolean;
    hoverStyle?: React.CSSProperties;
}
declare const BabalButton: ({ title, onclick, style, width, height, hover, hoverStyle }: buttonProps) => React.JSX.Element;

export { BabalButton };
