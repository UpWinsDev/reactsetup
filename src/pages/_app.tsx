import React from 'react'
import { AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'

import { useRouter } from 'next/router'
import getConfig from 'next/config'

import "../styles/globals.css"

import { AppWrapper, useAppContext } from '../context/AppContext';
import LayoutApp from './../components/Layout/LayoutApp';
import LayoutTenant from './../components/Layout/LayoutTenant';
import LayoutPublic from './../components/Layout/LayoutPublic';


const MyApp: React.FC = ({ Component, pageProps }:AppProps) => {

    const { locale, pathname } = useRouter()
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

    let Layout = LayoutPublic

    if(pathname.indexOf('/app') === 0 ){
        Layout = LayoutApp
    }
    if(pathname.indexOf('/_sites/[pseudoLocale]') === 0 ){
        Layout = LayoutTenant
    }



  return (
    <>
    <AppWrapper>
        <ThemeProvider theme={themes}>
            <Layout>
                <GlobalStyle/>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    </AppWrapper>

    </>
  )
}

export default MyApp
