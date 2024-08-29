import { Drawer, Modal, Select } from "antd";
import styled, { css, keyframes } from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
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
  rounded?: boolean;
}

export const StyledNumber = styled.div<styledNumberProps>`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) =>
    props.digitColor ? props.digitColor : "rgba(255, 255, 255, 0.939)"};
  box-shadow: 0 8px 32px 0 rgba(120, 117, 117, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 15px;
  border: 1px solid rgba(107, 70, 215, 0.18);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  align-items: center;
  display: flex;
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
  background-color: #d9d5d5;
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
  & > .search-contact-head {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #f0ddff;
  }
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
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(107, 70, 215, 0.18);
  border-radius: 10px;
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
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  border: 1px solid #c6c4c459;
  box-shadow: 0px 0px 8px 2px #c8c8dc;
  border-radius: 8px;
  background-color: #f5f3f39d;
  &:hover {
    cursor: pointer;
  }
`;
interface chatProps {
  color: string;
}

export const ChatWrapper = styled.section<chatProps>`
  position: relative;
  height: 97%;
  background: ${(props) => props.color};
`;
export const PressDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1000;
  & > .more-feature {
    background-color: #4241417f;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 10rem;
    animation: scale-in-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @keyframes scale-in-tr {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: 100% 0%;
        transform-origin: 100% 0%;
        opacity: 1;
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 0%;
        transform-origin: 100% 0%;
        opacity: 1;
      }
    }
    & > span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      color: #fff;
      cursor: pointer;
      &:hover {
        color: purple;
      }
    }
  }
  & > button {
    position: absolute;
    bottom: 1.25rem;
    left: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0.5rem;
    color: white;
    background-color: #351f77ba;
    font-size: 20px;
    animation: roll-in-right 0.6s ease-out both;
    &:focus {
      outline: none;
      border: none;
    }
    &:hover {
      outline: none;
      border: none;
    }
    @keyframes roll-in-right {
      0% {
        transform: translateX(800px) rotate(540deg);
        opacity: 0;
      }
      100% {
        transform: translateX(0) rotate(0deg);
        opacity: 1;
      }
    }
  }
`;
interface chatTextProps {
  width: number | string;
  placeholderColor?: string;
}

export const ChatText = styled.textarea<chatTextProps>`
  padding: 6px;
  border-radius: 8px;
  height: 3rem;
  background: transparent;
  width: ${(props) => props.width};
  border: 2px solid purple;
  color: ${({ theme }) => theme.color};

  &::placeholder {
    color: ${(props) =>
      props.placeholderColor
        ? props.placeholderColor
        : "white"}; /* Change this to your desired color */
  }

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    overflow: hidden;
  }
`;

//chat list
export const ChatListWrapper = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 8px;
  box-sizing: border-box;
  position: relative;

  & > .newChatdiv {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 20px;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid purple;
    cursor: pointer;
  }
  & > .messageListDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 55vh;
    overflow: scroll;
    scroll-behavior: smooth;
  }
  & > p {
    color: #605f5f;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 12rem;
    overflow: hidden;
  }
`;

//calling ui
export const CallWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
`;
export const CallHead = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  & > .call-user-img {
    background-color: #676666a2;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 15px;
    overflow: hidden;
  }
`;

export const CallFeatureDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;

  & > .featureDiv {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .feature-icon-div {
      width: 3rem;
      height: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
      background-color: transparent;
      &:hover {
        background-color: #acacacaf;
      }
    }
  }

  & > .nta-feature {
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 0px 52px 30px rgba(0, 0, 0, 0.1);
  }
  & > .feature-footer {
    display: flex;
    flex-direction: column;
    width: 4rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

//ant desing custom modal
interface modalProps {
  direction?: string;
  Bodyheight?: number | string;
  bgColor?: string;
}

export const StyledSelect = styled(Select)`
  width: 100% !important;
`;

export const StyledModal = styled(Modal)<modalProps>`
  .footer-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & > .delete-btn {
      width: 112px;
      border: 1px solid #d45d38;
      color: white;
      border-radius: 8px;
      background-color: #d45d38;
      padding: 0.5rem;
      &:hover {
        border: 1px solid #d45d38;
        color: #d45d38;
        background: transparent;
      }
    }
    & > .cancel-btn {
      width: 112px;
      border: 1px solid white;
      color: black;
      border-radius: 8px;
      background-color: white;
      padding: 0.5rem;
      &:hover {
        border: 1px solid #fff;
        color: #fff;
        background: transparent;
      }
    }
  }
  .ant-modal-content {
    width: 17rem;
    height: 15rem;
    position: absolute;
    top: 700%;
    left: 30.2%;
    padding: 10px !important;
    background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  }

  .ant-modal-body {
    display: flex;
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 2rem;
    height: calc(
      100% - ${(props) => (props.Bodyheight ? props.Bodyheight : "96px")}
    ); /* Adjust for the header height */
    & > .bin-div {
      width: 40px;
      height: 40px;
      color: #d45d38;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #d45d38;
    }
  }
`;
