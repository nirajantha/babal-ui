import React, { useState } from "react";
import BabalContainer from "../container/BabalContainer";
import { IoIosCall, IoIosContact } from "react-icons/io";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
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
        <IoIosContact size={40} />
        <StyledNumber onClick={handleCall} digitColor="green">
          <IoIosCall size={40} />
        </StyledNumber>
        <MdCancel size={40} onClick={(e) => editNumber(e)} />
      </BabalContainer>
    </FooterContainer>
  );
};

export default BabalFooter;
