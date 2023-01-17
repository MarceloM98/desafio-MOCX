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
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`

export const Form = styled.form`
  max-width: 35rem;
  margin: 0 auto;

  background-color: #232222;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 3rem;
  border-radius: 10px;

  > button {
    width: 100%;
    height: 4.5rem;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
  }
`
