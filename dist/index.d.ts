import React, { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

interface buttonProps {
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

interface menuItems {
    itemName: string;
    itemLink: string;
}
interface headerProps {
    menus?: menuItems[];
    logo?: string;
    type?: boolean;
    height: string | number;
    width: string | number;
}
declare const BabalHeader: ({ menus, logo, height, width, type }: headerProps) => React.JSX.Element;

interface containerProps {
    children: ReactNode;
    style?: React.CSSProperties;
    direction?: string;
}
declare const BabalContainer: ({ children, style }: containerProps) => React.JSX.Element;

interface DialerProps {
    logo?: string;
    inputOnChange?: (value: string) => void;
    digitColor?: string;
    width: string | number;
}
declare const BabalDialer: React.FC<DialerProps>;

declare const BabalInput: React.FC;

interface CustomTheme extends DefaultTheme {
    background?: string;
    color?: string;
    textColor?: string;
}

declare class BabalUi {
    constructor();
    private static isValidKey;
    private static initialize;
    toMakeCall(number1: string, number2: string, key: string): void;
    static Dialer({ DialerWidth, // DialerWidth instead of width
    DialerLogo, // DialerLogo instead of logo
    theme, key, digitColor, }: {
        DialerWidth: string | number;
        DialerLogo: string;
        theme?: CustomTheme;
        key: string;
        digitColor?: string;
    }): React.JSX.Element;
    static Button(title: string, onClick: () => void, key: string): React.JSX.Element;
    static Header(menus: menuItems[], logo: string, type: boolean, key: string, width: string | number, height: string | number): React.JSX.Element;
    static ContentWrapper(key: string, children: ReactNode, style?: React.CSSProperties): React.JSX.Element;
    static verticalWrapper(key: string, children: React.ReactNode, style?: React.CSSProperties): React.JSX.Element;
}

export { BabalButton, BabalContainer, BabalDialer, BabalHeader, BabalInput, BabalUi };
