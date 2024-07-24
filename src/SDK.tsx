import React, { ReactNode } from "react";
import {
  BabalButton,
  BabalContainer,
  BabalDialer,
  BabalHeader,
  BabalInput,
} from "./components";
import { VerticalWrapper } from "./components/container/BabalContainer";
import { NumberProvider } from "./components/context/NumberProvider";
import { menuItems } from "./components/header/BabalHeader";

export const MY_KEY = "123";

export class BabalUi {
  constructor() {}
  // static async isKeyValid (key:string){
  //   const res = await axios.post("http://localhost:3000/verify",key)
  //   console.log("res>>>",res)
  // }
  private static isValidKey(key: string): boolean {
    return key === MY_KEY;
  }

  private static initialize(key: string): void {
    if (!BabalUi.isValidKey(key)) {
      throw new Error("Invalid license key. Please contact support.");
    }
  }

  toMakeCall(number1: string, number2: string, key: string) {
    BabalUi.initialize(key);
  }

  static Dialer(
    logo: string,
    theme: { background: string; color: string },
    key: string,
    inputOnChange?: void
  ) {
    BabalUi.initialize(key);
    return (
      <NumberProvider>
        <BabalDialer logo={logo} theme={theme} inputOnChange={inputOnChange} />
      </NumberProvider>
    );
  }

  static Button(title: string, onClick: () => void, key: string) {
    BabalUi.initialize(key);
    return <BabalButton title={title} onclick={onClick} licenseKey={key} />;
  }
  // static Form(key: string) {
  //   BabalUi.initialize(key);
  //   return <BabalForm />;
  // }

  static Header(
    menus: menuItems[],
    theme: { background: string; color: string },
    logo: string,
    onchange: void,
    type: boolean,
    key: string
  ) {
    BabalUi.initialize(key);
    return (
      <BabalHeader
        theme={theme}
        type={type}
        menus={menus}
        logo={logo}
        onchange={onchange}
      />
    );
  }

  static ContentWrapper(
    key: string,
    children: ReactNode,
    style?: React.CSSProperties
  ) {
    BabalUi.initialize(key);
    return <BabalContainer style={style}>{children}</BabalContainer>;
  }
  static verticalWrapper(
    key: string,
    children: React.ReactNode,
    style?: React.CSSProperties
  ) {
    BabalUi.initialize(key);
    return <VerticalWrapper style={style}>{children}</VerticalWrapper>;
  }
}

export { BabalButton, BabalHeader, BabalContainer, BabalDialer, BabalInput };
