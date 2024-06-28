import React from 'react';
export interface buttonProps {
    title: string;
    onclick: () => void;
}
declare const BabalButton: ({ title, onclick }: buttonProps) => React.JSX.Element;
export default BabalButton;
