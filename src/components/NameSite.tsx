import React from 'react'
import { useRouter } from 'next/router'

const NameSite: React.FC = () => {
    const { locales, locale, defaultLocale } = useRouter()

    const nameSite = locale[0].toUpperCase() + locale.substr(1)
    return <>{nameSite}</>
}

export default NameSite
