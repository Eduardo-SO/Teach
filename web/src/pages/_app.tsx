import React, { useCallback, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'

import GlobalStyles from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />

      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
