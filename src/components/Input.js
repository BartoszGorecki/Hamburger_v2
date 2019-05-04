import React from "react";
import styled from "styled-components";

const InputAll = styled.div`
  width: 100%;
  padding: 10px;
`;
const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;
const InputEle = styled.input`
  width: 100%;
  display: block;
  border: 1px solid #ccc;
  background: white;
  padding: 5px 10px;
  :focus {
    background: #ccc;
  }
`;

const Input = props => {
  return (
    <InputAll>
      <Label>{props.label}</Label>
      <InputEle {...props} />
    </InputAll>
  );
};

export default Input;
