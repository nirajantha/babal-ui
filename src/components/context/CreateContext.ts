import { Dispatch, createContext, useContext } from "react";

export interface State{
    number:string;
}
export type Action = {type:"PressNumber";payload:string} | {type:"ClearNumber"}

type numberContextType = {
    state:State
    dispatch:Dispatch<Action>
}
export const initialValue: State = {
    number: "",
  };

export const NumberContext = createContext<numberContextType>({
    state:initialValue,
    dispatch:()=>null
})

export const useNumberContext = ()=> useContext(NumberContext)