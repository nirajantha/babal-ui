import React from "react";
type phoneContextType = {
    number: string;
    setNumber: React.Dispatch<React.SetStateAction<string>>;
};
export declare const PhoneContext: React.Context<phoneContextType>;
interface phoneProviderProps {
    children: React.ReactNode;
}
export declare const PhoneProvider: React.FC<phoneProviderProps>;
export declare const usePhoneContext: () => phoneContextType;
export {};
