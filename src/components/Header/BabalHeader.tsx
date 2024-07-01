import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';


interface menuItems{
  itemName:string;
  itemLink:string
}
interface headerProps{
menus:menuItems[];
logo:string;
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
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  background-color: aquamarine;
`;
const Logo = styled.img`
  height: 2rem;
  width: 2rem;
  mix-blend-mode: multiply;
`;

const MenuItem = styled.li`
  cursor: pointer;
  background-color: red;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;



const BabalHeader = ({menus,logo}:headerProps) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };
  return (
    <>
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <Logo src={logo}/>
        <Menu>
          {
            menus.map((menu,index)=>(
              <MenuItem key={index}><a href={menu.itemLink}></a>{menu.itemName}</MenuItem>
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