import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="author" content="Zak Nesler" />
          <meta name="robots" content="index, follow" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Zak Nesler" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Zak Nesler" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta
            name="description"
            content="Full-stack developer from Pennsylvania with a passion for clean design and tidy code."
          />
          <meta
            name="keywords"
            content="zak nesler, zak, nesler, zaknes, zaknesler, zachary nesler, web design, design, code, html, css, php, laravel, vue, programming, web development"
          />
          <meta property="og:title" content="Zak Nesler" />
          <meta property="og:site_name" content="Zak Nesler" />
          <meta property="og:url" content="https://nesler.dev" />
          <meta
            property="og:description"
            content="Full-stack developer from Pennsylvania with a passion for clean design and tidy code."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://nesler.dev/banner.png" />
          <meta name="p:domain_verify" content="ff1f90db2750254f6843a167a5e5efb8" />
          <title>Zak Nesler</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="128x128" href="/favicon.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
        </Head>

        <body className="dark:text-gray-300 dark:bg-gray-900 font-sans text-base font-normal leading-normal tracking-normal text-gray-700 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
