import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import {useAppContext} from '../../../context/AppContext'
import getConfig from 'next/config'
import { GetStaticProps, GetStaticPaths } from 'next'
import { LockClosedIcon } from '@heroicons/react/solid'

import ImgLogo from './../../../components/ImgLogo'

import Seo from '../../../components/Seo'
import { useTheme } from 'styled-components';

type AppProps = { pseudoLocale: string }

const Home: React.FC = ({ pseudoLocale }: AppProps) => {


    const { locales, locale, defaultLocale } = useRouter()
    const {
        publicRuntimeConfig: { sites, pseudoLocales }
    } = getConfig()

    const nextLocale = pseudoLocales.find(
        otherLocale => otherLocale !== pseudoLocale
    )
    const nextSiteNr = locale === 'amparo' ? 2 : 1

    const siteAndLocale = sites[locale] && sites[locale].locales[pseudoLocale]

    const logoTwitter = "./img/amparo/logo.png"
    ///////

    const dataDomain = useAppContext();
    const pathName = dataDomain.pathName

         // Rodar cores de forma global
         const theme = useTheme()
         const primary = theme.colors.primary
         const secondary = theme.colors.secondary
         const tertiary = theme.colors.tertiary

    return (
        <div className="container-xl">
            <Seo
                title={
                    siteAndLocale
                        ? `App multi-tenency - ${siteAndLocale.title}`
                        : `Site not found: '${locale}</strong>`
                }
                description="Aplicação do conceito de whitelabel"
            />

            <main className="main">


                <div className="min-h-full bg-white rounded-lg border border-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                    <div>

                        <div className="w-auto mx-auto sm:h-10" style={{  width: '200px', height:'60px'}}>
                            <ImgLogo height={60}/>
                        </div>
                        <h2 className="mt-8 text-center text-2xl font-extrabold text-gray-900">Sign in Profissional de Saúde {siteAndLocale
                                    ? siteAndLocale.title
                                    : `Site not found: '${locale}</strong>`}</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}

                        <a href="/home" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Ir para Dashboard
                        </a>


                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                            Email address
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                            Password
                            </label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            />
                        </div>
                        </div>

                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                            </a>
                        </div>
                        </div>

                        <div>
                        <button
                            type="submit"
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                        </div>
                    </form>
                    </div>
                </div>


                <div className="grid">
                    <a
                        href={`http://multi${nextSiteNr}-domain.com:3301/${pseudoLocale}`}
                        className="card"
                    >
                        <h3>
                            Alternar site (<code>locale</code>)
                        </h3>
                        <p>
                            De: <strong>{locale}</strong>
                        </p>
                        <p>Ir para: dominio {nextSiteNr}</p>
                    </a>

                </div>
            </main>

            <footer className="footer bg-gray-200">
                <a
                    href="https://github.com/tomsoderlund/nextjs-multi-domain-locale"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    MVP - APP Multitenant Soultech
                </a>
            </footer>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async context => {
    // ...

    const data = [
        { params: { pseudoLocale: 'en' }, locale: 'amparo' },
        { params: { pseudoLocale: 'en' }, locale: 'mavicard' },
        { params: { pseudoLocale: 'en' }, locale: 'you' }
    ]

    const project = data.find(p => p.locale === context.locale)

    if (!project) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            pseudoLocale: project.params.pseudoLocale
        },
        revalidate: 60 // Seconds. This refresh time could be longer depending on how often data changes.
    }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    //console.log(locales)

    const paths = [
        { params: { pseudoLocale: 'en' }, locale: 'amparo' },
        { params: { pseudoLocale: 'en' }, locale: 'mavicard' },
        { params: { pseudoLocale: 'en' }, locale: 'you' }
    ]

    // ...
    return {
        paths: paths,
        fallback: 'blocking' // true -> build page if missing, false -> serve 404
    }
}

export default Home
