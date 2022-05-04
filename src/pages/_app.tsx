import React from 'react'
import { AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'



import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'

const MyApp: React.FC = ({ Component, pageProps }:AppProps) => {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle/>
    </ThemeProvider>
    )
}

export default MyApp
