import styled from "styled-components";

export const Container = styled.h2`
  background-color: #1f2124;
  color: white;

  width: 100%;
  height: 10rem;
  font-size: 3rem;

  display: flex;
  align-items: center;

  padding-left: 15rem;
  border-bottom: 5px solid #ccc;
  border-top: 5px solid #ccc;

  @media (max-width: 870px) {
    font-size: 2rem;
    padding-left: 8rem;
    height: 8rem;
  }

  @media (max-width: 630px) {
    padding: 0;
    justify-content: center;
  }
`;
