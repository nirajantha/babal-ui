import styled from "styled-components";
interface styleHeaderProps {
  width: string | number;
  height: string | number;
}

export const HeaderWrapper = styled.header<styleHeaderProps>`
  box-sizing: border-box;
  display: flex;
  width: ${(props) => props.width};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: ${(props) => props.height};
  border-top-right-radius: 8px;
  /* border-top-left-radius: 8px; */
  background: red;
`;
export const BabalMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;
export const Logo = styled.img`
  height: 2rem;
  width: 2rem;
  mix-blend-mode: multiply;
`;

export const ItemLink = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
`;

export const ThemeToggleBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

interface styledNumberProps {
  digitColor?: string;
}

export const StyledNumber = styled.div<styledNumberProps>`
  width: 4rem;
  height: 4rem;
  background: ${(props) =>
    props.digitColor ? props.digitColor : "rgba(255, 255, 255, 0.25)"};
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
interface dialerProps {
  width: string | number;
}
export const DialerMainWrapper = styled.section<dialerProps>`
  display: flex;
  width: ${(props) => props.width};
  border-radius: 8px;
  border: 1px solid #a6a4a4;
`;

export const DialerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  overflow-x: hidden;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Display = styled.div`
  width: inherit;
  height: 10vh;
  background-color: white;
  color: ${({ theme }) => theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: medium;
`;
export const CalledUi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 350px;
`;

export const TextSpan = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.color};
`;

export const StyledSpinner = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 4px solid;
  border-color: white white white black;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
