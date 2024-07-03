import React from 'react'
import styled from "styled-components";

 const SearchInput = styled.input`
  outline: none;
  border: none;
  padding:0.8rem;
  width: inherit;
  font-size: medium;
  font-weight: 600;
  color:${({theme})=>theme.color};
  background-color:${({theme})=>theme.background};
  letter-spacing: 1px;
  ::placeholder{
    color:white
  }
`;

interface inputProps{
    handleChange:void
}


const BabalInputs = ({handleChange}:inputProps) => {
  return (
    <SearchInput onChange={()=>{handleChange}} placeholder="+91********"/>
  )
}

export default BabalInputs