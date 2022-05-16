import { createContext, useContext } from 'react';
import { useRouter } from 'next/router'
import getConfig from 'next/config'

const AppContext = createContext();

export function AppWrapper({ children }) {


    // Busca cliente
  const { locale } = useRouter()
    const {
        publicRuntimeConfig: { sites }
    } = getConfig()
    const siteAndLocale = sites[locale]


    const sharedState = {
        id: siteAndLocale.id,
        domain: siteAndLocale.domain,
        name: siteAndLocale.name,
        pathName: siteAndLocale.pathName,
        locales: siteAndLocale.locales
    }



    return (
        <AppContext.Provider value={sharedState}>
        {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
  return useContext(AppContext);
}


