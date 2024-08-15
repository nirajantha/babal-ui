import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { IoIosKeypad } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { MenuDiv, MenuIcon, SideMenuWrapper } from "../styled/StyledComponents";
import { split } from "@apollo/client";
import { useSideMenuContext } from "../../context/PhoneContext";
// interface sideMenuProps {
//   showChat: () => void;
//   showKeyPad: () => void;
//   showPhoneBook: () => void;
// }

const SideMenu = () => {
  const { path, setPath } = useSideMenuContext();

  const handleClick = (nav: any) => {
    setPath(nav);
  };

  console.log(path);

  return (
    <>
      <SideMenuWrapper>
        <MenuDiv>
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
              <FaRocketchat color="purple" size={30} />
            </MenuIcon>
          </Link>
        </MenuDiv>
      </SideMenuWrapper>
    </>
  );
};

export default SideMenu;
