import React, { ReactNode } from "react";
import { BabalButton, BabalContainer, BabalDialer, BabalHeader } from "./components";
export declare const MY_KEY = "123";
export declare class BabalUi {
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
export { BabalButton, BabalHeader, BabalContainer, BabalDialer };
