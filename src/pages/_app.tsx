import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import NProgress from "nprogress"
import Router from 'next/router';
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {

  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
      <GlobalStyles />
      <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
    </>
  )
}

export default App
