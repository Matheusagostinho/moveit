import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider session={pageProps.session}>
      <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
