import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import { IoIosKeypad } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

import {
  Logo,
  MenuDiv,
  MenuIcon,
  SideMenuWrapper,
} from "../styled/StyledComponents";
import { useSideMenuContext } from "../../context/PhoneContext";
// interface sideMenuProps {
//   showChat: () => void;
//   showKeyPad: () => void;
//   showPhoneBook: () => void;
// }
interface sideMenuProps {
  logo?: string;
}
const SideMenu = ({ logo }: sideMenuProps) => {
  const { path, setPath } = useSideMenuContext();

  const handleClick = (nav: any) => {
    setPath(nav);
  };

  console.log(path);

  return (
    <>
      <SideMenuWrapper>
        <MenuDiv>
          <MenuIcon>
            <Logo src={logo} />
          </MenuIcon>
          <Link to="keypad">
            <MenuIcon active={path === "keypad"}>
              <IoIosKeypad
                color="purple"
                size={30}
                onClick={() => {
                  handleClick("keypad");
                }}
              />
            </MenuIcon>
          </Link>
          <Link to="contact">
            <MenuIcon
              active={path === "contact"}
              onClick={() => {
                handleClick("contact");
              }}
            >
              <MdContactPhone color="purple" size={30} />
            </MenuIcon>
          </Link>
          <Link to="chat">
            <MenuIcon
              active={path === "chat"}
              onClick={() => {
                handleClick("chat");
              }}
            >
              <BiMessageRounded color="purple" size={30} />
            </MenuIcon>
          </Link>
        </MenuDiv>
      </SideMenuWrapper>
    </>
  );
};

export default SideMenu;
