import React from 'react'
import { AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import { useRouter } from 'next/router'
import getConfig from 'next/config'

import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'

import "../styles/globals.css"


const MyApp: React.FC = ({ Component, pageProps }:AppProps) => {


    const { locale } = useRouter()
    const {
        publicRuntimeConfig: { sites }
    } = getConfig()
    const siteAndLocale = sites[locale]
    const customstyles = siteAndLocale.stylecustom.colors
    const themes = {
        colors:{
            primary: customstyles.primary,
            secondary: customstyles.secondary,
            tertiary: customstyles.tertiary
        }
    }

    
  return (
    <>
        <ThemeProvider theme={themes}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}

export default MyApp
