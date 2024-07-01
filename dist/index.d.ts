import React from 'react';

interface buttonProps {
    title: string;
    onclick?: () => void;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    icon?: React.ReactNode;
    hover?: boolean;
    hoverStyle?: React.CSSProperties;
}
declare const BabalButton: ({ title, onclick, style, width, height, icon, hover, hoverStyle }: buttonProps) => React.JSX.Element;

interface headerProps {
    menus: [
        {
            link: string;
            name: string;
        }
    ];
    logo: string;
}
declare const BabalHeader: ({ menus, logo }: headerProps) => React.JSX.Element;

export { BabalButton, BabalHeader };
