import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

export interface menuItems {
  itemName: string;
  itemLink: string;
}
interface headerProps {
  menus?: menuItems[];
  logo?: string;
  onchange?:void;
  toggleTheme?:()=>void;
  theme:{}
  mode?:boolean
}


const HeaderWrapper = styled.header<headerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 20px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: ${({theme})=>theme.background};
  color: ${({ theme }) =>theme.color};
`;
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
const Logo = styled.img`
  height: 2rem;
  width: 2rem;
  mix-blend-mode: multiply;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

const BabalHeader = ({ menus,logo,toggleTheme,theme,mode }: headerProps) => {
  console.log("mode>>>",mode)

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderWrapper mode={mode}>
          <h3>Dialer</h3>
          {/* <Logo src={logo} /> */}
          {/* <Menu>
            {menus.map((menu, index) => (
              <MenuItem key={index}>
                <a href={menu.itemLink}></a>
                {menu.itemName}
              </MenuItem>
            ))}
          </Menu> */}
          <ThemeToggle onClick={toggleTheme}>
            {theme === theme ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
        </HeaderWrapper>
      </ThemeProvider>
    </>
  );
};

export default BabalHeader;
