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

import BabalHeader from "../header/BabalHeader";

// import BabalSearch from "../search/BabalSearch";
import { useNumberContext } from "../context/CreateContext";

import { DialerMainWrapper, DialerWrapper } from "../styled/StyledComponents";

import { Route, Routes } from "react-router-dom";
import Keypad from "../keypad/Keypad";
import SideMenu from "../sidemenu/SideMenu";
import ChatListUi from "../pages/chatList/ChatListUi";
import PhoneCallUi from "../pages/phoneCallUi/PhoneCallUi";
import SingleChatUi from "../pages/chatUI/SingleChatUi";
import SinglePhoneDetails from "../pages/phoneBook/SinglePhoneDetails";
import ChatUi from "../pages/chatUI/ChatUi";
import PhoneBook from "../pages/phoneBook/PhoneBook";
import DialerHeader from "../dialerHeader/DialerHeader";
// import { TwilioProvider, useTwilio } from "../../context/TwilioContext";

interface DialerProps {
  logo?: string;
  inputOnChange?: (value: string) => void;
  digitColor?: string;
  width: string | number;
}

const BabalDialer: React.FC<DialerProps> = ({ logo, width, digitColor }) => {
  return (
    <DialerMainWrapper width={width}>
      <SideMenu logo={logo} />
      <DialerWrapper>
        <DialerHeader />
        {/* <BabalHeader height="50px" width="inherit" logo={logo} type={false} /> */}
        <Routes>
          <Route path="/" element={<Keypad digitColor={digitColor} />} />
          <Route path="contact" element={<PhoneBook />} />
          <Route path="chat" element={<ChatListUi />} />
          <Route path="call" element={<PhoneCallUi />} />
          <Route path="call/:id" element={<PhoneCallUi />} />
          <Route path="newchat" element={<ChatUi />} />
          <Route path="chat/:id" element={<SingleChatUi />} />
          <Route path="keypad" element={<Keypad digitColor={digitColor} />} />
          <Route path="phoneDetail/:id" element={<SinglePhoneDetails />} />
        </Routes>
      </DialerWrapper>
    </DialerMainWrapper>
  );
};

export default BabalDialer;
