import React, { useReducer } from "react";
import { NumberContext, initialValue } from "./CreateContext";
import { reducer } from "./Reducer";

interface numberProviderProps {
  children: React.ReactNode;
}

export const NumberProvider: React.FC<numberProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <NumberContext.Provider value={{ state, dispatch }}>
      {children}
    </NumberContext.Provider>
  );
};
