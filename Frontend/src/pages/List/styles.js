import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  main{
    display: flex;
    flex: 1 0 auto;
    margin: 2rem;
  }
  .cards-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  }
`
