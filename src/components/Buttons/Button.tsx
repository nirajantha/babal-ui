import React, { useState } from "react";
import styled from "styled-components";
import { StyledSpinner } from "../styled/StyledComponents";
// import { MY_KEY } from "../../SDK";

export interface buttonProps {
  type?: string;
  title: string;
  licenseKey: string;
  click: () => void;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
  icon?: React.ReactNode;
  hover?: boolean;
  hoverStyle?: React.CSSProperties;
}

const BabalButton = ({
  title,
  licenseKey,
  click,
  style,
  width,
  height,
  icon,
  hover,
  hoverStyle,
  type,
}: buttonProps) => {
  const [spin, setSpin] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleClick = () => {
    setSpin(true);
    click();
    setTimeout(() => {
      setSpin(false);
    }, 2000);
  };

  const defaultStyles: React.CSSProperties = {
    backgroundColor: "#280154",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    color: "white",
    border: "1px solid #280154",
    padding: "0.8rem",
    height, // Set the height from props
    width, // Set the width from props
    ...(hover && isHover ? hoverStyle : {}),
  };
  const combinedStyle = { ...defaultStyles, ...style };

  return (
    <button
      disabled={spin}
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={combinedStyle}
    >
      {icon}
      {spin ? <StyledSpinner /> : title}
    </button>
  );
};

export default BabalButton;
