import React from "react";
import { NumberGrid, StyledNumber, TextSpan } from "../styled/StyledComponents";
import BabalContainer from "../container/BabalContainer";
import { useNumberContext } from "../context/CreateContext";
interface keypadprops {
  digitColor?: string;
}
const Numbers: React.FC<keypadprops> = ({ digitColor }) => {
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
  const { state, dispatch } = useNumberContext();
  const handleClick = (digit: string) => {
    dispatch({ type: "PressNumber", payload: digit });
  };
  return (
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
                {digitToLettersMap[digit as keyof typeof digitToLettersMap]}
              </TextSpan>
            </StyledNumber>
          ))}
        </BabalContainer>
      ))}
    </NumberGrid>
  );
};

export default Numbers;
