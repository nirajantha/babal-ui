import React from "react";
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
  return (
    <>
      <SideMenuWrapper>
        <MenuDiv>
          <Link to="keypad">
            <MenuIcon>
              <IoIosKeypad color="purple" size={30} />
            </MenuIcon>
          </Link>
          <Link to="contact">
            <MenuIcon>
              <MdContactPhone color="purple" size={30} />
            </MenuIcon>
          </Link>

          <Link to="chat">
            <MenuIcon>
              <FaRocketchat color="purple" size={30} />
            </MenuIcon>
          </Link>
        </MenuDiv>
      </SideMenuWrapper>
    </>
  );
};

export default SideMenu;
