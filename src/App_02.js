// createGlobalStyle & Style Extend & Animation

import React, { Component } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button success>Hello</Button>
        <Button danger rotationTime={5}>
          Hello
        </Button>
        <Anchor as="a" href="https://www.google.com">
          Go to Google
        </Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button)`
  text-decoration: none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to  {
    transform: rotate(360deg);
  }
`;

export default App;
