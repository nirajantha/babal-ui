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
                    {digit !== "*" && digit !== "0" && digit !== "#" && (
                      <TextSpan>
                        {String.fromCharCode(65 + (parseInt(digit) - 1) * 3) +
                          String.fromCharCode(
                            65 + (parseInt(digit) - 1) * 3 + 2
                          )}
                      </TextSpan>
                    )}
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
