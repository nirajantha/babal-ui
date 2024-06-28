import React from 'react';

interface buttonProps {
    title: string;
    onclick: () => void;
    style?: React.CSSProperties;
}
declare const BabalButton: ({ title, onclick, style }: buttonProps) => React.JSX.Element;

export { BabalButton };
