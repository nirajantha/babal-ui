import React, { useState } from "react";
import { MY_KEY } from "../../SDK";

export interface buttonProps {
  title: string;
  licenseKey: string;
  onclick?: () => void;
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
  onclick,
  style,
  width,
  height,
  icon,
  hover,
  hoverStyle,
}: buttonProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

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

  if (licenseKey === MY_KEY) {
    return (
      <button
        onClick={onclick}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        style={combinedStyle}
      >
        {title}
        {icon}
      </button>
    );
  } else {
    throw new Error("License Key not matched contact to the support");
  }
};

export default BabalButton;
