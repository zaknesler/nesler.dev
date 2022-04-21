import '../css/app.css'

import { MDXProvider } from '@mdx-js/react'

function App({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default App
