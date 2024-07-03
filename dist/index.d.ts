import React, { ReactNode } from 'react';

interface buttonProps {
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

interface menuItems {
    itemName: string;
    itemLink: string;
}
interface headerProps {
    menus?: menuItems[];
    logo?: string;
    onchange?: void;
    toggleTheme?: () => void;
    theme: {};
    mode?: boolean;
}
declare const BabalHeader: ({ menus, logo, toggleTheme, theme, mode }: headerProps) => React.JSX.Element;

interface containerProps {
    children: ReactNode;
    style?: React.CSSProperties;
    direction?: string;
}
declare const BabalContainer: ({ children, style }: containerProps) => React.JSX.Element;

interface dialerProps {
    logo?: string;
    inputOnChange?: void;
    theme: {};
}
declare const BabalDialer: React.FC<dialerProps>;

declare const MY_KEY = "123";
declare class BabalUi {
    private static isValidKey;
    static initialize(key: string): void;
    static Dialer(logo: string, theme: {
        background: string;
        color: string;
        inputOnChange?: void;
    }, key: string): React.JSX.Element;
    static Button(title: string, onClick: () => void, key: string): React.JSX.Element;
    static ContentWrapper(key: string, children: ReactNode, style?: React.CSSProperties): React.JSX.Element;
    static verticalWrapper(key: string, children: React.ReactNode, style?: React.CSSProperties): React.JSX.Element;
}

export { BabalButton, BabalContainer, BabalDialer, BabalHeader, BabalUi, MY_KEY };
