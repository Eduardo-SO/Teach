import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background.primary};

    transition: color 0.2s;
    transition: background 0.2s;
  }

  body,
  input,
  button,
  textarea {
    color: ${props => props.theme.colors.text.primary};

    -webkit-font-smoothing: antialiased;
    font: 400 16px 'Poppins';
  }

  input {
    transition: color 0.2s;
    transition: background 0.2s;
  }

  #__next, body, main {
    height: 100vh;
    overflow-x: hidden;
  }
`
