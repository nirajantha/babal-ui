import React, { ReactNode } from "react";
import { BabalButton, BabalContainer, BabalDialer, BabalHeader, BabalInput } from "./components";
import { menuItems } from "./components/header/BabalHeader";
export declare const MY_KEY = "123";
export declare class BabalUi {
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
export { BabalButton, BabalHeader, BabalContainer, BabalDialer, BabalInput };
