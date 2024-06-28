import React from 'react'


export interface buttonProps{
title:string;
onclick:()=>void;
}

const BabalButton = ({title,onclick}:buttonProps) => {
  return (
    <button onClick={onclick} style={{backgroundColor:"blue",color:"white",padding:"2rem"}}>{title}</button>
  )
}

export default BabalButton