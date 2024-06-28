import React, { useState } from 'react'


export interface buttonProps{
title:string;
onclick:()=>void;
style?:React.CSSProperties;
width?:string | number;
height?:string | number;
hover?:boolean;
hoverStyle?:React.CSSProperties;
}

const BabalButton = ({title,onclick,style,width,height,hover,hoverStyle}:buttonProps) => {
    const[IsHovered,setIsHovered] = useState<boolean>(false)
    const defaultStyles: React.CSSProperties = {
        backgroundColor: "#280154",
        color: "white",
        border:"1px solid #280154",
        padding:"0.8rem",
        height, // Set the height from props
        width ,  // Set the width from props
        ...(hover && IsHovered?{hoverStyle}:{} )
      };
      const combinedStyle = {...defaultStyles,...style}
  return (
    <button onClick={onclick} onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} style={combinedStyle} >{title}</button>
  )
}

export default BabalButton