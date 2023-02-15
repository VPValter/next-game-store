import '../styles/globals.css'
import '../styles/games.css'
import '../styles/search.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// TODO: figure out Layout with Typescript
