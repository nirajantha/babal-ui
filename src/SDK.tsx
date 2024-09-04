import React, { ReactNode } from "react";
import "./main.css";

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
import { MY_KEY } from "./constant/Constant";
import { TwilioProvider } from "./context/TwilioContext";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { PhoneProvider, SideMenuProvider } from "./context/PhoneContext";
import { ConfigProvider } from "antd";
import { defaultTheme } from "antd/es/theme/context";
import { CustomTheme } from "./theme";
import ErrorBoundary from "./components/error/ErrorBoundry";

export class BabalUi {
  constructor() {}
  // static async isKeyValid (key:string){
  //   const res = await axios.post("http://localhost:3000/verify",key)
  //   console.log("res>>>",res)
  // }

  private static isValidKey(key: string): boolean {
    return key === MY_KEY;
  }

  private static initialize(key: string): boolean {
    if (!BabalUi.isValidKey(key)) {
      return false;
    }
    return true;
  }

  toMakeCall(number1: string, number2: string, key: string) {
    BabalUi.initialize(key);
  }

  static Dialer({
    DialerWidth, // DialerWidth instead of width
    DialerLogo, // DialerLogo instead of logo
    theme,
    key,
    digitColor, // digitbg instead of digitColor
  }: {
    DialerWidth: string | number;
    DialerLogo: string;
    theme?: CustomTheme;
    key: string;
    digitColor?: string;
  }) {
    const isValid = BabalUi.initialize(key);

    if (!isValid) {
      return (
        <div className="bg-re">
          {" "}
          Invalid license key. Please contact support. dialerSDK@krispcall.com{" "}
        </div>
      );
    }

    const DefaultTheme: CustomTheme = {
      color: "#000",
      background: "#fff",
      textColor: "#000",
    };
    const mergeThemes: CustomTheme = {
      ...DefaultTheme,
      ...theme,
    };

    return (
      // <TwilioProvider>
      <BrowserRouter>
        <ThemeProvider theme={mergeThemes}>
          <ConfigProvider
            theme={{
              components: {
                Drawer: {
                  paddingLG: 0,
                  colorPrimaryBorder: "none",
                },
              },
            }}
          >
            <NumberProvider>
              <PhoneProvider>
                <SideMenuProvider>
                  <BabalDialer
                    width={DialerWidth}
                    logo={DialerLogo}
                    digitColor={digitColor}
                  />
                </SideMenuProvider>
              </PhoneProvider>
            </NumberProvider>
          </ConfigProvider>
        </ThemeProvider>
      </BrowserRouter>

      // </TwilioProvider>
    );
  }

  static Button(title: string, onClick: () => void, key: string) {
    BabalUi.initialize(key);
    return <BabalButton title={title} click={onClick} licenseKey={key} />;
  }
  // static Form(key: string) {
  //   BabalUi.initialize(key);
  //   return <BabalForm />;
  // }

  static Header(
    menus: menuItems[],
    logo: string,
    type: boolean,
    key: string,
    width: string | number,
    height: string | number
  ) {
    BabalUi.initialize(key);
    return (
      <BabalHeader
        height={height}
        width={width}
        type={type}
        menus={menus}
        logo={logo}
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
