import React, { useState } from "react";
import BabalContainer from "../container/BabalContainer";
import { IoIosCall, IoIosContact } from "react-icons/io";
import styled from "styled-components";
import { IoMdPersonAdd } from "react-icons/io";
import { BiMessageSquareX } from "react-icons/bi";
import { CgBackspace } from "react-icons/cg";
import { useNumberContext } from "../context/CreateContext";
import { StyledNumber } from "../styled/StyledComponents";

const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

interface footerProps {
  handleCall: () => void;
}

const BabalFooter = ({ handleCall }: footerProps) => {
  const { state, dispatch } = useNumberContext();

  const editNumber = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "ClearNumber" });
  };
  return (
    <FooterContainer>
      <BabalContainer>
        <IoMdPersonAdd size={30} />
        <StyledNumber onClick={handleCall} rounded={true} digitColor="green">
          <IoIosCall size={30} color="white" />
        </StyledNumber>
        <BiMessageSquareX size={30} onClick={(e) => editNumber(e)} />
      </BabalContainer>
    </FooterContainer>
  );
};

export default BabalFooter;
