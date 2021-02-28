import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <meta name="theme-color" content="#121214" />

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" href="iconspwa/apple-icon-180.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
