import React from 'react'


export interface buttonProps{
title:string;
}

const Button = ({title}:buttonProps) => {
  return (
    <button>{title}</button>
  )
}

export default Button