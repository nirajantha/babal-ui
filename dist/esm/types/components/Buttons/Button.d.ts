import React from 'react';
export interface buttonProps {
    title: string;
    onclick?: () => void;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    icon?: React.ReactNode;
}
declare const BabalButton: ({ title, onclick, style, width, height, icon }: buttonProps) => React.JSX.Element;
export default BabalButton;
