import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10%;
  overflow-y: auto;
  > h2 {
    background-color: #171717;
    color: white;

    height: 10rem;
    font-size: 3rem;

    display: flex;
    align-items: center;

    padding-left: 15rem;
    border-bottom: 5px solid #ccc;
    border-top: 5px solid #ccc;
  }
`;
