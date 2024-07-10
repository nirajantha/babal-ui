import styled from "styled-components";

interface styledNumberProps {
  background?: string;
}

export const StyledNumber = styled.div<styledNumberProps>`
  width: 4rem;
  height: 4rem;
  background: ${(props) =>
    props.background ? props.background : "rgba(255, 255, 255, 0.25)"};
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

export const InputStyledDiv = styled.div`
  width: 350px;
  background: ${({ theme }) => theme.background};
  padding: 1rem;
`;
export const DialerWrapper = styled.section`
  width: 350px;
  height: fit-content;
  border-radius: 8px;
  border: 1px solid #a6a4a4;
  overflow-x: hidden;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
export const Display = styled.div`
  width: inherit;
  height: 10vh;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: medium;
`;
