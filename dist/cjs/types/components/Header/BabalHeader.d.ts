import React from 'react';
interface menuItems {
    itemName: string;
    itemLink: string;
}
interface headerProps {
    menus: menuItems[];
    logo: string;
}
declare const BabalHeader: ({ menus, logo }: headerProps) => React.JSX.Element;
export default BabalHeader;
