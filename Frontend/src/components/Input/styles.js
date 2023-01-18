import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: white;

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: #000;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #808080;
    }
  }


  > svg {
    color: #000;
    margin-left: 16px;
  }
`;
