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
}
declare const BabalHeader: ({ menus, logo, toggleTheme, theme, mode }: headerProps) => React.JSX.Element;
export default BabalHeader;
