import React, { ReactNode } from "react";
import "./main.css";
import { BabalButton, BabalContainer, BabalDialer, BabalHeader, BabalInput } from "./components";
import { menuItems } from "./components/header/BabalHeader";
import { CustomTheme } from "./theme";
export declare class BabalUi {
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
export { BabalButton, BabalHeader, BabalContainer, BabalDialer, BabalInput };
