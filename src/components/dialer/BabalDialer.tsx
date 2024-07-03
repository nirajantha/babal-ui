import React, { useState } from "react";
import BabalContainer from "../container/BabalContainer";
import BabalHeader from "../header/BabalHeader";
import styled, { ThemeProvider } from "styled-components";
import BabalFooter from "../footer/BabalFooter";
import BabalInputs from "../inputs/BabalInputs";
import { NumberProvider } from "../context/NumberProvider";
import { useNumberContext } from "../context/CreateContext";


interface dialerProps {
  logo?: string;
  inputOnChange?: void;
  theme:{}
}
const InputStyledDiv = styled.div`
    width: 350px;
    background: ${({ theme }) => theme.background};
    padding: 1rem;
`
const DialerWrapper = styled.section`
  width: 350px;
  height: fit-content;
  border-radius: 8px;
  border: 1px solid #a6a4a4;
  overflow-x: hidden;
  padding-bottom:20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
const Display = styled.div`
  width: inherit;
  height: 10vh;
  background-color: white;
  color:black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: medium;
`
interface styledNumberProps{
  background?:string
}
export const StyledNumber = styled.div<styledNumberProps>`
  width: 4rem;
  height: 4rem;
  background: ${(props)=> props.background ? props.background : "rgba(255, 255, 255, 0.25)"};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: large;
  font-weight: 600;
  text-align: center;
  align-items: center;
  display: flex;
  gap: 0;
  flex-direction: column;
  justify-content: center;
`;

const BabalDialer: React.FC<dialerProps> = ({ logo, inputOnChange,theme }) => {
  const {state,dispatch} = useNumberContext()

    // const [mode, setMode] = useState<boolean>(false);
    // const toggleTheme = () => {
    //     setMode(!mode)
    //   };
      const handleClick = (digit:string)=>{
        dispatch({type:"PressNumber",payload:digit})
      }
  return (
    <>
       <ThemeProvider theme={theme}>
      <DialerWrapper>
        <BabalHeader logo={logo}  theme={theme} type={false}/>
        <InputStyledDiv>
            <BabalInputs handleChange={inputOnChange}/>
        </InputStyledDiv>
        <Display>{state.number}</Display>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <BabalContainer>
            <StyledNumber onClick={()=>{handleClick("1")}}>
              1<span style={{ color: "#c0b9b9", fontSize: "12px" }}>ABC</span>
            </StyledNumber>
            <StyledNumber onClick={()=>{handleClick("2")}}>
              2<span style={{ color: "#c0b9b9", fontSize: "12px" }}>DEF</span>
            </StyledNumber>
            <StyledNumber onClick={()=>{handleClick("3")}}>
              3<span style={{ color: "#c0b9b9", fontSize: "12px" }}>GHI</span>
            </StyledNumber>
          </BabalContainer>
          <BabalContainer>
            <StyledNumber onClick={()=>{handleClick("4")}}>
              4<span style={{ color: "#c0b9b9", fontSize: "12px" }}>JKL</span>
            </StyledNumber>
            <StyledNumber onClick={()=>{handleClick("5")}}>
              5<span style={{ color: "#c0b9b9", fontSize: "12px" }}>MNO</span>
            </StyledNumber>
            <StyledNumber onClick={()=>{handleClick("6")}}>
              6<span style={{ color: "#c0b9b9", fontSize: "12px" }}>PQR</span>
            </StyledNumber>
          </BabalContainer>
          <BabalContainer>
            <StyledNumber onClick={()=>{handleClick("7")}}>
              7<span style={{ color: "#c0b9b9", fontSize: "12px" }}>STU</span>
            </StyledNumber>
            <StyledNumber onClick={()=>{handleClick("8")}}>
              8<span style={{ color: "#c0b9b9", fontSize: "12px" }}>VWX</span>
            </StyledNumber>
            <StyledNumber onClick={()=>{handleClick("9")}}>
              9<span style={{ color: "#c0b9b9", fontSize: "12px" }}>YZ</span>
            </StyledNumber>
          </BabalContainer>
          <BabalContainer>
            <StyledNumber onClick={()=>{handleClick("*")}}>*</StyledNumber>
            <StyledNumber onClick={()=>{handleClick("0")}}>
              0<span style={{ color: "#c0b9b9", fontSize: "12px" }}>+</span>
            </StyledNumber>
            <StyledNumber onClick={()=>{handleClick("#")}}>#</StyledNumber>
          </BabalContainer>
        </div>
        <BabalFooter/>  
      </DialerWrapper>
      </ThemeProvider>
    </>
  );
};

export default BabalDialer;
