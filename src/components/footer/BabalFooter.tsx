import React from "react";
import BabalContainer from "../container/BabalContainer";
import { StyledNumber } from "../dialer/BabalDialer";
import { IoIosCall,IoIosContact } from "react-icons/io";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { useNumberContext } from "../context/CreateContext";

// interface footerProps{
//   mobNumber:string
// }

const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const BabalFooter = () => {
  const {state,dispatch} = useNumberContext()

  const editNumber = (e:React.MouseEvent)=>{
    e.preventDefault();
    dispatch({type:"ClearNumber"})
    
  }
  return (
   <FooterContainer>
     <BabalContainer>
     <IoIosContact size={40}/>
        <StyledNumber background="green">
          <IoIosCall size={40}/>
        </StyledNumber>
        <MdCancel  size={40} onClick={(e)=>editNumber(e)} />
      </BabalContainer>
   </FooterContainer>
  );
};

export default BabalFooter;
