import React from 'react';
export interface headerProps {
    menus: string[];
    logo: string;
}
declare const BabalHeader: ({ menus, logo }: headerProps) => React.JSX.Element;
export default BabalHeader;
