import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { IoIosKeypad } from "react-icons/io";
import { Link } from "react-router-dom";
import { MenuDiv, MenuIcon, SideMenuWrapper } from "../styled/StyledComponents";
// interface sideMenuProps {
//   showChat: () => void;
//   showKeyPad: () => void;
//   showPhoneBook: () => void;
// }

const SideMenu = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
      <SideMenuWrapper>
        <MenuDiv>
          <Link to="keypad">
            <MenuIcon active={activeItem === "keypad"}>
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
              active={activeItem === "contact"}
              onClick={() => {
                handleClick("contact");
              }}
            >
              <MdContactPhone color="purple" size={30} />
            </MenuIcon>
          </Link>

          <Link to="chat">
            <MenuIcon
              active={activeItem === "chat"}
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
