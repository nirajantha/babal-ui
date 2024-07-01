import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';


export interface headerProps{
menus:string[];
}


const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#333',
  color: '#fff',
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;
const Logo = styled.img`
  height: 10px;
  width: 10px;
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



const BabalHeader = ({menus}:headerProps) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };
  return (
    <>
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <Logo/>
        <Menu>
          {
            menus.map((menu,index)=>(
              <MenuItem key={index}>{menu}</MenuItem>
            ))
          }
          </Menu>
          <ThemeToggle onClick={toggleTheme}>
            
              {theme === lightTheme ? <FaMoon /> : <FaSun />}
            
            </ThemeToggle>

      </HeaderWrapper>

    </ThemeProvider>
    
    </>
   
  )
}

export default BabalHeader