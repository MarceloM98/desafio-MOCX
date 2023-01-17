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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`
