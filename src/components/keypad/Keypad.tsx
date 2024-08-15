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
import BabalFooter from "../footer/BabalFooter";
import { useNumberContext } from "../context/CreateContext";
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
  return (
    <>
      {showUi ? (
        <CalledUi>
          <StyledNumber onClick={handleHangUp}>
            <IoIosCall size={40} color="red" />
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
