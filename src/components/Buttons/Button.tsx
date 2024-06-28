import React, { useState } from 'react'


export interface buttonProps{
title:string;
onclick?:()=>void;
style?:React.CSSProperties;
width?:string | number;
height?:string | number;
icon?:React.ReactNode
}

const BabalButton = ({title,onclick,style,width,height,icon}:buttonProps) => {

    const defaultStyles: React.CSSProperties = {
        backgroundColor: "#280154",
        color: "white",
        border:"1px solid #280154",
        padding:"0.8rem",
        height, // Set the height from props
        width ,  // Set the width from props
      };
      const combinedStyle = {...defaultStyles,...style}
  return (
    <button onClick={onclick} style={combinedStyle}>{title}{icon}</button>
  )
}

export default BabalButton