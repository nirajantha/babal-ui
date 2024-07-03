import React, { ReactNode } from "react";
interface containerProps {
    children: ReactNode;
    style?: React.CSSProperties;
    direction?: string;
}
export declare const VerticalWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const BabalContainer: ({ children, style }: containerProps) => React.JSX.Element;
export default BabalContainer;
