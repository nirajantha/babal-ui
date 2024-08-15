import React, { useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import {
  BabalMenu,
  HeaderWrapper,
  ItemLink,
  Logo,
  MenuItem,
  ThemeToggleBtn,
} from "../styled/StyledComponents";
import { Menu } from "antd";

export interface menuItems {
  itemName: string;
  itemLink: string;
}
interface headerProps {
  menus?: menuItems[];
  logo?: string;
  type?: boolean;
  height: string | number;
  width: string | number;
}
const BabalHeader = ({ menus, logo, height, width, type }: headerProps) => {
  const [toggle, setToggle] = useState(false);

  const toggleFun = () => {
    // toggleTheme;
    setToggle(!toggle);
  };
  return (
    <>
      <HeaderWrapper height={height} width={width}>
        {type ? (
          <>
            <Logo src={logo} />
            <BabalMenu>
              {menus?.map((menu, index) => (
                <MenuItem key={index}>
                  <ItemLink href={menu.itemLink}>{menu.itemName}</ItemLink>
                </MenuItem>
              ))}
            </BabalMenu>
          </>
        ) : (
          <p>Dialer</p>
        )}

        {toggle ? (
          <FaMoon onClick={toggleFun} />
        ) : (
          <FaSun onClick={toggleFun} />
        )}
      </HeaderWrapper>
    </>
  );
};

export default BabalHeader;
