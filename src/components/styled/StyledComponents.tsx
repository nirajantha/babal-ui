import styled from "styled-components";
interface styleHeaderProps {
  width: string | number;
  height: string | number;
}

export const HeaderWrapper = styled.header<styleHeaderProps>`
  box-sizing: border-box;
  display: flex;
  width: ${(props) => props.width};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: ${(props) => props.height};
  border-top-right-radius: 8px;
  /* border-top-left-radius: 8px; */
  background: #380179;
  color: white;
`;
export const BabalMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;
export const Logo = styled.img`
  height: 2rem;
  width: 2rem;
  mix-blend-mode: multiply;
`;

export const ItemLink = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
`;

export const ThemeToggleBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

interface styledNumberProps {
  digitColor?: string;
}

export const StyledNumber = styled.div<styledNumberProps>`
  width: 4rem;
  height: 4rem;
  background: ${(props) =>
    props.digitColor ? props.digitColor : "rgba(255, 255, 255, 0.25)"};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  align-items: center;
  display: flex;
  gap: 0;
  flex-direction: column;
  justify-content: center;
`;

export const InputStyledDiv = styled.div`
  width: 350px;
  background: ${({ theme }) => theme.background};
  padding: 1rem;
`;
interface dialerProps {
  width: string | number;
}
export const DialerMainWrapper = styled.section<dialerProps>`
  display: flex;
  width: ${(props) => props.width};
  border-radius: 8px;
  border: 1px solid #a6a4a4;
  position: relative;
  overflow: hidden;
  height: 68vh;
`;

export const DialerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  background-color: ${({ theme }) =>
    theme.background ? theme.background : "#9d6f19"};
  color: ${({ theme }) => theme.color};
`;
export const NumberGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 10px;
`;

export const Display = styled.div`
  width: inherit;
  height: 10vh;
  background-color: #9d9999;
  color: ${({ theme }) => (theme.textColor ? theme.textColor : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: medium;
  box-shadow: inset 20px 20px 60px #cbcbcbe3, inset -20px -20px 60px #ffffff;
`;
export const CalledUi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 350px;
`;

export const TextSpan = styled.span`
  font-size: 13px;
  color: #868686;
`;

export const StyledSpinner = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 4px solid;
  border-color: white white white black;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

//side menu
interface sideMenuProps {
  isOpen: boolean;
}
export const SideMenuWrapper = styled.section`
  box-sizing: border-box;
  width: 80px;
  background-color: #d7d3d3;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 4px;
`;

// export const SlideDiv = styled.div<sideMenuProps>`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 80px; /* Set the width of the sliding div */
//   background-color: white;
//   box-sizing: border-box;
//   border-bottom-left-radius: 8px;
//   border-top-left-radius: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid red;
//   transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
//   transition: transform 0.5s ease-in-out;
//   padding: 4px;
// `;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
interface menuProps {
  active?: boolean;
}
export const MenuIcon = styled.div<menuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "#79b0f2" : "transparent")};
  box-shadow: -3px 1px 43px -3px rgba(150, 144, 144, 1);
`;

export const ContactWrapper = styled.section`
  height: 89%;
  margin: 0;
`;

export const PhoneInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  background: transparent;
  width: 100%;
  border: 2px solid #b9b6b69c;
  color: ${({ theme }) => theme.color};
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) =>
      theme.color}; /* Change this to your desired color */
    font-weight: 500;
  }

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;
export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #c6c4c459;
  box-shadow: 0px 0px 8px 2px rgba(159, 159, 174, 1);
  border-radius: 8px;
  background-color: #d5d3d39d;
`;
interface chatProps {
  color: string;
}
export const ChatWrapper = styled.section<chatProps>`
  position: relative;
  height: 90.55%;
  background: ${(props) => props.color};
`;
interface chatTextProps {
  width: number | string;
}
export const ChatText = styled.textarea<chatTextProps>`
  padding: 6px;
  border-radius: 8px;
  background: transparent;
  width: ${(props) => props.width};
  border: 2px solid #adacb0ce;
  color: ${({ theme }) => theme.color};

  &::placeholder {
    color: white; /* Change this to your desired color */
  }

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;
