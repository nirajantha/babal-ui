import React from "react";
export interface menuItems {
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
export default BabalHeader;
