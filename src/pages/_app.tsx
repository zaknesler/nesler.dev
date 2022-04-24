import '../css/app.css'

import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default App
