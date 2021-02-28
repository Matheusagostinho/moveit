import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding: 0;
  box-sizing:border-box;
}

    html {
      font-size: 68.75%;
    }

@media (max-width: 1080px) {
    html {
      font-size: 62.5%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 56.25%;
    }
  }
${({ theme }) => css`
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
  }
  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}


`

export default GlobalStyles
