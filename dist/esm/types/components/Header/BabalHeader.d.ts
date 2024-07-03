import React from "react";
export interface menuItems {
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
export default BabalHeader;
