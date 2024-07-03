import React, { ReactNode } from "react";
import {
  BabalButton,
  BabalContainer,
  BabalDialer,
  BabalHeader,
} from "./components";
import { menuItems } from "./components/header/BabalHeader";
import { VerticalWrapper } from "./components/container/BabalContainer";
import { NumberProvider } from "./components/context/NumberProvider";

export const MY_KEY = "123";


export class BabalUi {

  private static isValidKey(key: string): boolean {
    return key === MY_KEY;
  }

  static initialize(key: string): void {
    if (!BabalUi.isValidKey(key)) {
      throw new Error("Invalid license key. Please contact support.");
    }
  }

  static Dialer(logo: string,theme: { background: string; color: string; inputOnChange?: void },key:string) {
    BabalUi.initialize(key);
    return (
      <NumberProvider>
        <BabalDialer logo={logo} theme={theme} />
      </NumberProvider>
    );
  }

  static Button(title: string, onClick: () => void,key:string) {
    BabalUi.initialize(key);
    return <BabalButton title={title} onclick={onClick} key={key}/>;
  }

  // static Header(menus: menuItems[], logo: string,onchange:void) {
  //   return (
  //       <BabalHeader menus={menus} logo={logo} onchange={onchange}/>
  //   );
  // }

  static ContentWrapper(key:string,children: ReactNode, style?: React.CSSProperties,) {
    BabalUi.initialize(key);
    return <BabalContainer style={style}>{children}</BabalContainer>;
  }
  static verticalWrapper(key:string,children: React.ReactNode,style?: React.CSSProperties,) {
    BabalUi.initialize(key);
    return <VerticalWrapper style={style}>{children}</VerticalWrapper>;
  }
}

export { BabalButton, BabalHeader, BabalContainer, BabalDialer };
