import React from "react";
interface DialerProps {
    logo?: string;
    inputOnChange?: (value: string) => void;
    digitColor?: string;
    width: string | number;
}
declare const BabalDialer: React.FC<DialerProps>;
export default BabalDialer;
