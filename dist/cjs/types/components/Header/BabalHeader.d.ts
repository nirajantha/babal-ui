import React from 'react';
export interface headerProps {
    menus: [
        {
            link: string;
            name: string;
        }
    ];
    logo: string;
}
declare const BabalHeader: ({ menus, logo }: headerProps) => React.JSX.Element;
export default BabalHeader;
