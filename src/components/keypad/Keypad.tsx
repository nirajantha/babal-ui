import React from "react";
import { Display } from "../styled/StyledComponents";

import BabalFooter from "../footer/DialerFooter";
import { useNumberContext } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
import Numbers from "./Numbers";
interface keypadprops {
  digitColor?: string;
}

const Keypad = ({ digitColor }: keypadprops) => {
  const { state, dispatch } = useNumberContext();
  const navigate = useNavigate();
  const handleCall = () => {
    navigate("/call");
  };

  return (
    <>
      <Display>{state.number}</Display>
      <Numbers digitColor={digitColor} />
      <BabalFooter handleCall={handleCall} />
    </>
  );
};

export default Keypad;
