import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0; // removes the outline when a component is with focus
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
  }
  /* to facilitate the use of REM metric unit, then I know that 0.1 REM is 1px */
  html {
    font-size: 62.5%;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }
`
