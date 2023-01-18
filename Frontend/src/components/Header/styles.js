import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10rem;

  display: flex;
  padding: 2rem 4rem 2rem 15rem;

  justify-content: space-between;
  
  @media (max-width: 870px){
    padding-left: 8rem;
  }

  @media (max-width: 630px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  @media (max-width:500px){
    align-items: center;

    .logo{
      max-width: 18rem;
      max-height: 6rem;
    }
  }

  @media (max-width: 340px){
    padding: 0 .5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 3rem;
    @media (max-width:500px){
      gap: 2px;
      flex-direction: column;
    }
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
