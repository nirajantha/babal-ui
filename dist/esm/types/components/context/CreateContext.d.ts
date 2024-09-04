import { Dispatch } from "react";
export interface State {
    number: string;
}
export type Action = {
    type: "PressNumber";
    payload: string;
} | {
    type: "ClearNumber";
};
type numberContextType = {
    state: State;
    dispatch: Dispatch<Action>;
};
export declare const initialValue: State;
export declare const NumberContext: import("react").Context<numberContextType>;
export declare const useNumberContext: () => numberContextType;
export {};
