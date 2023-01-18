import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7rem;
  background-color: #1f2124;
  display: flex;
  align-items: center;

  padding: 2rem 0 2rem 15rem;

  @media (max-width: 870px){
    padding-left: 8rem;
  }
  @media (max-width: 630px){
    justify-content: center;
    padding: 0;
  }
`;
