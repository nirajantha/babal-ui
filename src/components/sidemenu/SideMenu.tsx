import React, { useMemo } from "react";
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
  const location = useLocation();

  const lastway = useMemo(() => {
    const way = location.pathname.split("/");
    let lastSegment = way[1];

    if (lastSegment === "" || lastSegment === "call") {
      return "keypad";
    } else if (lastSegment === "newchat") {
      return "chat";
    } else if (lastSegment === "phoneDetail") {
      return "contact";
    } else {
      return lastSegment;
    }
  }, [location.pathname]);

  return (
    <SideMenuWrapper>
      <MenuDiv>
        <MenuIcon>
          <Logo src={logo} />
        </MenuIcon>
        <Link to="keypad">
          <MenuIcon active={lastway === "keypad"}>
            <IoIosKeypad color="purple" size={30} />
          </MenuIcon>
        </Link>
        <Link to="contact">
          <MenuIcon active={lastway === "contact"}>
            <MdContactPhone color="purple" size={30} />
          </MenuIcon>
        </Link>
        <Link to="chat">
          <MenuIcon active={lastway === "chat"}>
            <BiMessageRounded color="purple" size={30} />
          </MenuIcon>
        </Link>
      </MenuDiv>
    </SideMenuWrapper>
  );
};

export default SideMenu;
