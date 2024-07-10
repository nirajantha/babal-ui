import React, { useState } from "react";
import BabalContainer from "../container/BabalContainer";
import BabalHeader from "../header/BabalHeader";
import styled, { ThemeProvider } from "styled-components";
import BabalFooter from "../footer/BabalFooter";
import BabalInputs from "../inputs/BabalInputs";
import { useNumberContext } from "../context/CreateContext";
import {
  DialerWrapper,
  Display,
  InputStyledDiv,
  StyledNumber,
} from "../styled/StyledComponents";

interface dialerProps {
  logo?: string;
  inputOnChange?: void;
  theme: {};
}

const BabalDialer: React.FC<dialerProps> = ({ logo, inputOnChange, theme }) => {
  const { state, dispatch } = useNumberContext();

  // const [mode, setMode] = useState<boolean>(false);
  // const toggleTheme = () => {
  //     setMode(!mode)
  //   };
  const handleClick = (digit: string) => {
    dispatch({ type: "PressNumber", payload: digit });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <DialerWrapper>
          <BabalHeader logo={logo} theme={theme} type={false} />
          <InputStyledDiv>
            <BabalInputs handleChange={inputOnChange} />
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
              <StyledNumber
                onClick={() => {
                  handleClick("1");
                }}
              >
                1<span style={{ color: "#c0b9b9", fontSize: "12px" }}>ABC</span>
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("2");
                }}
              >
                2<span style={{ color: "#c0b9b9", fontSize: "12px" }}>DEF</span>
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("3");
                }}
              >
                3<span style={{ color: "#c0b9b9", fontSize: "12px" }}>GHI</span>
              </StyledNumber>
            </BabalContainer>
            <BabalContainer>
              <StyledNumber
                onClick={() => {
                  handleClick("4");
                }}
              >
                4<span style={{ color: "#c0b9b9", fontSize: "12px" }}>JKL</span>
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("5");
                }}
              >
                5<span style={{ color: "#c0b9b9", fontSize: "12px" }}>MNO</span>
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("6");
                }}
              >
                6<span style={{ color: "#c0b9b9", fontSize: "12px" }}>PQR</span>
              </StyledNumber>
            </BabalContainer>
            <BabalContainer>
              <StyledNumber
                onClick={() => {
                  handleClick("7");
                }}
              >
                7<span style={{ color: "#c0b9b9", fontSize: "12px" }}>STU</span>
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("8");
                }}
              >
                8<span style={{ color: "#c0b9b9", fontSize: "12px" }}>VWX</span>
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("9");
                }}
              >
                9<span style={{ color: "#c0b9b9", fontSize: "12px" }}>YZ</span>
              </StyledNumber>
            </BabalContainer>
            <BabalContainer>
              <StyledNumber
                onClick={() => {
                  handleClick("*");
                }}
              >
                *
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("0");
                }}
              >
                0<span style={{ color: "#c0b9b9", fontSize: "12px" }}>+</span>
              </StyledNumber>
              <StyledNumber
                onClick={() => {
                  handleClick("#");
                }}
              >
                #
              </StyledNumber>
            </BabalContainer>
          </div>
          <BabalFooter />
        </DialerWrapper>
      </ThemeProvider>
    </>
  );
};

export default BabalDialer;
