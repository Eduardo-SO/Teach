import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import light from '../styles/themes/light'
// import dark from '../styles/themes/dark'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
