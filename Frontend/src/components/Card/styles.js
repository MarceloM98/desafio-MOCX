import styled from "styled-components";

export const Container = styled.div`
  .card {
    background: #1f2124;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
    color: white;
    float: left;

    width: 28rem;
    height: 33rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .card:nth-child(2) {
    margin: 20px 0px;
    width: 33.3333%;
    padding: 50px 20px;
  }

  .icon > svg {
    width: 5rem;
    height: 5rem;
  }
  .icon > svg path {
    fill: #f6b352;
  }

  .features ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 10px;
    font-size: 2.5rem;
  }

  .btn {
    display: block;
    background: #f6b352;
    padding: 5px;

    width: 9rem;

    border-radius: 15px;
    text-decoration: none;
  }
  .btn p {
    color: black;
  }

  .btn:hover {
  }
`;
