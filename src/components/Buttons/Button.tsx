import React, { useState } from 'react'


export interface buttonProps{
title:string;
onclick?:()=>void;
style?:React.CSSProperties;
width?:string | number;
height?:string | number;
icon?:React.ReactNode;
hover?:boolean;
hoverStyle?:React.CSSProperties;

}

const BabalButton = ({title,onclick,style,width,height,icon,hover,hoverStyle}:buttonProps) => {
    const[isHover,setIsHover] = useState<boolean>(false)
   

    const defaultStyles: React.CSSProperties = {
        backgroundColor: "#280154",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        gap:"8px",
        color: "white",
        border:"1px solid #280154",
        padding:"0.8rem",
        height, // Set the height from props
        width ,  // Set the width from props
        ...(hover && isHover ? hoverStyle:{})
      };
      const combinedStyle = {...defaultStyles,...style}
  return (
    <button  onClick={onclick} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} style={combinedStyle}>{title}{icon}</button>
  )
}

export default BabalButton