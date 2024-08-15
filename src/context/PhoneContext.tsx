import React, { createContext, useContext, useState } from "react";
type phoneContextType = {
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
};

export const PhoneContext = createContext<phoneContextType>({
  number: "", // Default value for the number
  setNumber: () => {}, // No-op function as a placeholder
});

interface phoneProviderProps {
  children: React.ReactNode;
}
export const PhoneProvider: React.FC<phoneProviderProps> = ({ children }) => {
  const [number, setNumber] = useState<any>(null);

  return (
    <PhoneContext.Provider value={{ number, setNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhoneContext = () => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error("usePhoneContext must be used within a PhoneProvider");
  }
  return context;
};

///

type sideMenuContextType = {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
};

export const SideMenuContext = createContext<sideMenuContextType>({
  path: "", // Default value for the number
  setPath: () => {}, // No-op function as a placeholder
});

interface phoneProviderProps {
  children: React.ReactNode;
}
export const SideMenuProvider: React.FC<phoneProviderProps> = ({
  children,
}) => {
  const [path, setPath] = useState<any>(null);

  return (
    <SideMenuContext.Provider value={{ path, setPath }}>
      {children}
    </SideMenuContext.Provider>
  );
};

export const useSideMenuContext = () => {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error("usePhoneContext must be used within a PhoneProvider");
  }
  return context;
};
