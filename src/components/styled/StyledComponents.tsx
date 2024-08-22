import styled, { css, keyframes } from "styled-components";
interface styleHeaderProps {
  width: string | number;
  height: string | number;
}

export const HeaderWrapper = styled.header<styleHeaderProps>`
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

export const StyledNumber = styled.div<
  styledNumberProps & { rounded?: boolean }
>`
  width: 4rem;
  height: 4rem;
  background: ${(props) =>
    props.digitColor ? props.digitColor : "rgba(255, 255, 255, 0.747)"};
  box-shadow: 0 8px 32px 0 rgba(174, 175, 195, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  align-items: center;
  display: flex;
  gap: 0;
  flex-direction: column;
  justify-content: center;
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `}
  &:hover {
    cursor: pointer;
  }
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
  border: 2px solid #4140409c;
  color: ${({ theme }) => theme.color};
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) =>
      theme.color}; /* Change this to your desired color */
    font-weight: 500;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;
const scaleUp = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0.2;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
interface messageProps {
  width: number | string;
}
export const MessageBox = styled.div<messageProps & { isNew?: boolean }>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid purple;
  border-radius: 8px;
  padding: 6px;
  margin: 0;
  background-color: #f0ddff;
  ${({ isNew }) =>
    isNew &&
    css`
      animation: ${scaleUp} 0.3s ease-out;
    `}

  &:hover {
    cursor: pointer;
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
  &:hover {
    cursor: pointer;
  }
`;
interface chatProps {
  color: string;
}

export const ChatWrapper = styled.section<chatProps>`
  position: relative;
  height: 94%;
  background: ${(props) => props.color};
`;
export const PressDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1000;
`;
interface chatTextProps {
  width: number | string;
}
export const ChatText = styled.textarea<chatTextProps>`
  padding: 6px;
  border-radius: 8px;
  height: 3rem;
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
