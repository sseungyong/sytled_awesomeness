import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider
  /*css , keyframes*/
} from "styled-components";
import theme from "./theme";
//import "./App.css";

createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

// class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Button success>Hello</Button>
//         <Button danger rotationTime={5}>
//           Hello
//         </Button>
//         <Anchor as="a" href="https://www.google.com">
//           Go to Google
//         </Anchor>
//       </Container>
//     );
//   }
// }

// const awesomeCard = css`
//   /*Mixin*/
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   background-color: white;
//   border-radius: 10px;
//   padding: 20px;
// `;
const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  /*nesting*/
  /* ${Card} {
    background-color: blue;
  } */ 
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form></Form>
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

// const Input = styled.input.attrs({
//   required: true
// })`
//   border: none;
//   ${awesomeCard};
// `;

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   -webkit-appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
//   ${props => {
//     if (props.danger) {
//       return css`
//         animation: ${rotation} ${props.rotationTime}s linear infinite;
//       `;
//     }
//   }}
// `;

// const Anchor = styled(Button)`
//   text-decoration: none;
// `;

// const rotation = keyframes`
//   from{
//     transform: rotate(0deg);
//   }
//   to  {
//     transform: rotate(360deg);
//   }
// `;

export default App;
