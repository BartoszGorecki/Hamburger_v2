import styled from "styled-components";

export const ButtonLM = styled.button`
    min-width: 80px;
    padding: 5px;
    margin: 5px auto;
    border: 1px solid #aa6817
    display: block;
    font-weight: bold;
    :disabled {
      cursor: default
    }
`;

export const ButtonCC = styled.button`
  padding: 10px;
  margin: 0 20px;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid transparent;
  transition: 0.2s;
  border-radius: 3px;
  :hover {
    border: 2px solid black;
  }
  :disabled {
    cursor: default;
  }
  :disabled:hover {
    border: 2px solid transparent;
  }
`;

export const ButtonX = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  background: transparent;
  border: none;
  transition: 0.3s;
  border-radius: 3px;
  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
