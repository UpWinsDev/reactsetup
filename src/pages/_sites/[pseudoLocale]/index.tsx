import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import { GetStaticProps, GetStaticPaths } from 'next'

import Seo from '../../../components/Seo'
import Header from '../../../components/Header'

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
            <Header />

            <main className="main">
                <h1 className="title">
                    {siteAndLocale
                        ? siteAndLocale.title
                        : `Site not found: '${locale}</strong>`}
                </h1>
                {siteAndLocale && (
                    <p className="description">
                        {siteAndLocale.description}
                    </p>
                )}

                <h1>Olá mundo - hello</h1>


                <div className="grid">
                    <a
                        href={`http://multi${nextSiteNr}-domain.com:3301/${pseudoLocale}`}
                        className="card"
                    >
                        <h3>
                            Switch site (<code>locale</code>)
                        </h3>
                        <p>
                            Currently: <strong>{locale}</strong>
                        </p>
                        <p>Go to: _site/domain {nextSiteNr}</p>
                    </a>

                    <Link href={`/${nextLocale}`}>
                        <a className="card">
                            <h3>
                                Switch language (<code>pseudoLocale</code>)
                            </h3>
                            <p>
                                Currently: <strong>{pseudoLocale}</strong>
                            </p>
                            <p>
                                Switch locale to: <strong>{nextLocale}</strong>
                            </p>
                        </a>
                    </Link>

                </div>
            </main>

            <footer className="footer">
                <a
                    href="https://github.com/tomsoderlund/nextjs-multi-domain-locale"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get the source code
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
