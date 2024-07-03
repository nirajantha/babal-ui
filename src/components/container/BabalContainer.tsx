import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

interface containerProps {
  children: ReactNode;
  style?: React.CSSProperties;
  direction?:string;
}
const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:25px;
  flex-wrap: wrap;
`;
export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`


const BabalContainer = ({ children, style }: containerProps) => {
  const defaultStyle:React.CSSProperties = {
    display:"flex",
  };
  return (
    <>
      <BodyWrapper style={{ ...style }}>
    {children}
      </BodyWrapper>
    </>
  );
};
  
export default BabalContainer;
