import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
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
