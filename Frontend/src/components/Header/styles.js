import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  padding: 2rem 0 2rem 15rem;

  justify-content: space-between;

  nav{
    display: flex;
    align-items: center;
    gap: 3rem;
    padding-right: 4rem;
  }
  nav > a {
    color: black;
    font-size: 2.5rem;
    transition: transform .2s;
  }

  a:hover{
    transform: scale(1.2);
  }
`;
