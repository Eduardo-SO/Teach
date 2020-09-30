import React, { useCallback } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from '../utils/usePersistedState'

import GlobalStyles from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
