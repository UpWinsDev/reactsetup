import React from 'react'
import { AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'

import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'

import "../styles/globals.css"

const MyApp: React.FC = ({ Component, pageProps }:AppProps) => {
  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}

export default MyApp
