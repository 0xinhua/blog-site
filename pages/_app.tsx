import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/github-markdown-dark.css'
import '../styles/github-markdown-light.css'
import {ThemeProvider} from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
