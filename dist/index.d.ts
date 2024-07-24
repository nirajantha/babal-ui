import React, { ReactNode } from 'react';

interface buttonProps {
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
    type?: boolean;
}
declare const BabalHeader: ({ menus, logo, toggleTheme, theme, mode, type }: headerProps) => React.JSX.Element;

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

declare const BabalInput: React.FC;

declare const MY_KEY = "123";
declare class BabalUi {
    constructor();
    private static isValidKey;
    private static initialize;
    toMakeCall(number1: string, number2: string, key: string): void;
    static Dialer(logo: string, theme: {
        background: string;
        color: string;
    }, key: string, inputOnChange?: void): React.JSX.Element;
    static Button(title: string, onClick: () => void, key: string): React.JSX.Element;
    static Header(menus: menuItems[], theme: {
        background: string;
        color: string;
    }, logo: string, onchange: void, type: boolean, key: string): React.JSX.Element;
    static ContentWrapper(key: string, children: ReactNode, style?: React.CSSProperties): React.JSX.Element;
    static verticalWrapper(key: string, children: React.ReactNode, style?: React.CSSProperties): React.JSX.Element;
}

export { BabalButton, BabalContainer, BabalDialer, BabalHeader, BabalInput, BabalUi, MY_KEY };
