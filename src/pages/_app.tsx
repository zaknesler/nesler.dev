import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'
import '../css/app.css'

const App = ({ Component, pageProps }: AppProps) => (
  <MDXProvider>
    <Component {...pageProps} />
  </MDXProvider>
)

export default App
