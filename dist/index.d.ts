import React from 'react';

interface buttonProps {
    title: string;
    onclick: () => void;
}
declare const BabalButton: ({ title, onclick }: buttonProps) => React.JSX.Element;

export { BabalButton };
