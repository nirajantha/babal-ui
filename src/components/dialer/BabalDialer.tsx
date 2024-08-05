// import React, { useState } from "react";
// import BabalContainer from "../container/BabalContainer";
// import BabalHeader from "../header/BabalHeader";
// import styled, { ThemeProvider } from "styled-components";
// import BabalFooter from "../footer/BabalFooter";
// import BabalSearch from "../search/BabalSearch";
// import { useNumberContext } from "../context/CreateContext";
// import {
//   DialerWrapper,
//   Display,
//   InputStyledDiv,
//   StyledNumber,
// } from "../styled/StyledComponents";
// import { useTwilio } from "../../context/TwilioContext";

// interface dialerProps {
//   logo?: string;
//   inputOnChange?: void;
//   theme: {};
// }

// const BabalDialer: React.FC<dialerProps> = ({ logo, inputOnChange, theme }) => {
//   const { connect, disconnect, status } = useTwilio();
//   const [phoneNumber, setPhoneNumber] = useState<string>("");

//   const handleCall = () => {
//     alert("calling");
//     connect(phoneNumber);
//   };

//   const handleHangUp = () => {
//     disconnect();
//     alert("canceling..");
//   };
//   const { state, dispatch } = useNumberContext();

//   // const [mode, setMode] = useState<boolean>(false);
//   // const toggleTheme = () => {
//   //     setMode(!mode)
//   //   };
//   const handleClick = (digit: string) => {
//     dispatch({ type: "PressNumber", payload: digit });
//   };
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <DialerWrapper>
//           <BabalHeader logo={logo} theme={theme} type={false} />
//           <InputStyledDiv>
//             <BabalSearch handleChange={inputOnChange} />
//           </InputStyledDiv>
//           <Display>{state.number}</Display>
//           <div
//             style={{
//               display: "flex",
//               gap: "10px",
//               flexDirection: "column",
//               marginTop: "10px",
//             }}
//           >
//             <BabalContainer>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("1");
//                 }}
//               >
//                 1<span style={{ color: "#c0b9b9", fontSize: "12px" }}>ABC</span>
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("2");
//                 }}
//               >
//                 2<span style={{ color: "#c0b9b9", fontSize: "12px" }}>DEF</span>
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("3");
//                 }}
//               >
//                 3<span style={{ color: "#c0b9b9", fontSize: "12px" }}>GHI</span>
//               </StyledNumber>
//             </BabalContainer>
//             <BabalContainer>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("4");
//                 }}
//               >
//                 4<span style={{ color: "#c0b9b9", fontSize: "12px" }}>JKL</span>
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("5");
//                 }}
//               >
//                 5<span style={{ color: "#c0b9b9", fontSize: "12px" }}>MNO</span>
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("6");
//                 }}
//               >
//                 6<span style={{ color: "#c0b9b9", fontSize: "12px" }}>PQR</span>
//               </StyledNumber>
//             </BabalContainer>
//             <BabalContainer>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("7");
//                 }}
//               >
//                 7<span style={{ color: "#c0b9b9", fontSize: "12px" }}>STU</span>
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("8");
//                 }}
//               >
//                 8<span style={{ color: "#c0b9b9", fontSize: "12px" }}>VWX</span>
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("9");
//                 }}
//               >
//                 9<span style={{ color: "#c0b9b9", fontSize: "12px" }}>YZ</span>
//               </StyledNumber>
//             </BabalContainer>
//             <BabalContainer>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("*");
//                 }}
//               >
//                 *
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("0");
//                 }}
//               >
//                 0<span style={{ color: "#c0b9b9", fontSize: "12px" }}>+</span>
//               </StyledNumber>
//               <StyledNumber
//                 onClick={() => {
//                   handleClick("#");
//                 }}
//               >
//                 #
//               </StyledNumber>
//             </BabalContainer>
//           </div>
//           <BabalFooter
//             handleCall={handleCall}
//             handleCancelCall={handleHangUp}
//           />
//         </DialerWrapper>
//       </ThemeProvider>
//     </>
//   );
// };

// export default BabalDialer;

import React, { useState } from "react";
import BabalContainer from "../container/BabalContainer";
import BabalHeader from "../header/BabalHeader";
import styled, { ThemeProvider } from "styled-components";
import BabalFooter from "../footer/BabalFooter";
// import BabalSearch from "../search/BabalSearch";
import { useNumberContext } from "../context/CreateContext";
import {
  CalledUi,
  DialerWrapper,
  Display,
  InputStyledDiv,
  StyledNumber,
} from "../styled/StyledComponents";
import { IoIosCall } from "react-icons/io";
// import { TwilioProvider, useTwilio } from "../../context/TwilioContext";

interface DialerProps {
  logo?: string;
  inputOnChange?: (value: string) => void;
  digitColor?: string;
  width: string | number;
}

const NumberGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 10px;
`;

const BabalDialer: React.FC<DialerProps> = ({
  logo,
  digitColor,
  inputOnChange,
  width,
}) => {
  // const { connect, disconnect } = useTwilio();
  const { state, dispatch } = useNumberContext();
  const [showUi, setShowUi] = useState<boolean>(false);

  const handleCall = () => {
    setShowUi(!showUi);
    // connect(state.number);
  };

  const handleHangUp = () => {
    // disconnect();
    setShowUi(!showUi);
  };

  const handleClick = (digit: string) => {
    dispatch({ type: "PressNumber", payload: digit });
  };

  const handleCancelCall = () => {
    alert("call cancel");
  };

  return (
    <DialerWrapper width={width}>
      <BabalHeader height="60px" width="inherit" logo={logo} type={false} />
      {showUi ? (
        <CalledUi>
          <StyledNumber onClick={handleHangUp}>
            <IoIosCall size={40} color="red" />
          </StyledNumber>
        </CalledUi>
      ) : (
        <>
          <InputStyledDiv>
            {/* <BabalSearch handleChange={inputOnChange} /> */}
          </InputStyledDiv>
          <Display>{state.number}</Display>
          <NumberGrid>
            {["123", "456", "789", "*0#"].map((row, rowIndex) => (
              <BabalContainer key={rowIndex}>
                {row.split("").map((digit) => (
                  <StyledNumber
                    digitColor={digitColor}
                    key={digit}
                    onClick={() => handleClick(digit)}
                  >
                    {digit}
                    {digit !== "*" && digit !== "0" && digit !== "#" && (
                      <span style={{ color: "#c0b9b9", fontSize: "12px" }}>
                        {String.fromCharCode(65 + (parseInt(digit) - 1) * 3) +
                          String.fromCharCode(
                            65 + (parseInt(digit) - 1) * 3 + 2
                          )}
                      </span>
                    )}
                  </StyledNumber>
                ))}
              </BabalContainer>
            ))}
          </NumberGrid>
          <BabalFooter handleCall={handleCall} />
        </>
      )}
    </DialerWrapper>
  );
};

export default BabalDialer;
