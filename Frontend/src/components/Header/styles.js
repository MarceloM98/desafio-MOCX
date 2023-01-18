import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10rem;

  display: flex;
  padding: 2rem 0 2rem 15rem;

  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding-right: 4rem;
  }
  nav a button {
    background-color: #1f2124;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    width: 10rem;
    transition: transform 0.2s;
  }
  a > button {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
  }

  button:hover {
    transform: scale(1.1);
  }
`;
