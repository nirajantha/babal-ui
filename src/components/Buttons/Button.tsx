import React from 'react'


export interface buttonProps{
title:string;
onclick:()=>void;
style?:React.CSSProperties;

}

const BabalButton = ({title,onclick,style}:buttonProps) => {
  return (
    <button onClick={onclick} style={{...style}}>{title}</button>
  )
}

export default BabalButton