import React from 'react'
import { AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'

import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'

import { useRouter } from 'next/router'
import getConfig from 'next/config'

import "../styles/globals.css"

import { AppWrapper, useAppContext } from '../context/AppContext';


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
    <AppWrapper>
        <ThemeProvider theme={themes}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    </AppWrapper>

    </>
  )
}

export default MyApp
