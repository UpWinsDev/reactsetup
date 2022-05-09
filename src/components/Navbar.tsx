import React from 'react'
import Link from 'next/link'
import HamburgerSvg from './icons/HamburgerSvg'
import HouseSvg from './icons/HouseSvg'
import NameSite from './NameSite'

import { useRouter } from 'next/router'

type AppProps = { pseudoLocale: string }

const Navbar: React.FC = ({ pseudoLocale }: AppProps) => {
    const { locales, locale, defaultLocale } = useRouter()

    return (
        <div className={`navbar bg-base-100 justify-between ${locale}`}>
            <div className="flex">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                    <HamburgerSvg />
                </label>
            </div>
            <div className="flex">
                <Link href="/home">
                    <a className="mr-1 cursor-pointer">
                        <HouseSvg />
                    </a>
                </Link>
                <a className="normal-case text-xl">
                    Bem vindo ao Soultech <NameSite />
                </a>
            </div>
            <div></div>
        </div>
    )
}
export default Navbar
