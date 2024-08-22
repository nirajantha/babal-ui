import React, { useState } from "react";
import {
  CalledUi,
  Display,
  NumberGrid,
  StyledNumber,
  TextSpan,
} from "../styled/StyledComponents";
import { IoIosCall } from "react-icons/io";
import BabalContainer from "../container/BabalContainer";
import BabalFooter from "../footer/DialerFooter";
import { useNumberContext } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
interface keypadprops {
  digitColor?: string;
}
const digitToLettersMap = {
  "1": "",
  "2": "ABC",
  "3": "DEF",
  "4": "GHI",
  "5": "JKL",
  "6": "MNO",
  "7": "PQRS",
  "8": "TUV",
  "9": "WXYZ",
  "*": "",
  "0": "+",
  "#": "",
};
const Keypad = ({ digitColor }: keypadprops) => {
  const { state, dispatch } = useNumberContext();
  const [english, setEnglish] = useState(false);
  const [showUi, setShowUi] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleCall = () => {
    navigate("/call");
  };

  const handleHangUp = () => {
    // disconnect();
    setShowUi(!showUi);
  };

  const handleClick = (digit: string) => {
    dispatch({ type: "PressNumber", payload: digit });
  };
  return (
    <>
      {showUi ? (
        <CalledUi>
          <StyledNumber digitColor="red" onClick={handleHangUp}>
            <IoIosCall size={40} color="white" />
          </StyledNumber>
        </CalledUi>
      ) : (
        <>
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

                    <TextSpan>
                      {
                        digitToLettersMap[
                          digit as keyof typeof digitToLettersMap
                        ]
                      }
                    </TextSpan>
                  </StyledNumber>
                ))}
              </BabalContainer>
            ))}
          </NumberGrid>
          <BabalFooter handleCall={handleCall} />
        </>
      )}
    </>
  );
};

export default Keypad;
