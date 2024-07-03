import React from "react";
interface dialerProps {
    logo?: string;
    inputOnChange?: void;
    theme: {};
}
interface styledNumberProps {
    background?: string;
}
export declare const StyledNumber: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, styledNumberProps>> & string;
declare const BabalDialer: React.FC<dialerProps>;
export default BabalDialer;
