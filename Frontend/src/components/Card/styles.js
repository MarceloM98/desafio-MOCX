import styled from "styled-components"

export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  
  border: 1px solid black;
  position: relative;
  .info{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .controls{
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }

`