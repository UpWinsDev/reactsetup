import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import { GetStaticProps, GetStaticPaths } from 'next'

import styles from '../../styles/Home.module.css'
import packageJson from '../../../package.json'
import logoTwitter from '../../assets/twitter-logo.png'

type AppProps = { pseudoLocale: string };

const Home: React.FC<AppProps> = ({ pseudoLocale }) => {


  const { locales, locale, defaultLocale } = useRouter()
  const { publicRuntimeConfig: { sites, pseudoLocales } } = getConfig()

  const nextLocale = pseudoLocales.find(otherLocale => otherLocale !== pseudoLocale)
  const nextSiteNr = locale === 'site2' ? 1 : 2

  const siteAndLocale = sites[locale] && sites[locale].locales[pseudoLocale]

  return (
    <div className={[styles.container, locale, pseudoLocale].join(' ')}>
      <Head>
        <title>Multi Domain SSG using i18n</title>
        <meta name='description' content={packageJson.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{siteAndLocale ? siteAndLocale.title : `Site not found: '${locale}</strong>`}</h1>
        {siteAndLocale && (
          <p className={styles.description}>{siteAndLocale.description}</p>
        )}

        <h1>Olá mundo - hello</h1>
        <Image src={logoTwitter} alt="" width="50" height="50"/>

        <p className={styles.description}>{packageJson.description}</p>

        <div className={styles.grid}>
          <a href={`http://multi-domain${nextSiteNr}.com:3301/${pseudoLocale}`} className={styles.card}>
            <h3>Switch site (<code>locale</code>)</h3>
            <p>Currently: <strong>{locale}</strong></p>
            <p>Go to: site/domain {nextSiteNr}</p>
          </a>

          <Link href={`/${nextLocale}`}>
            <a className={styles.card}>
              <h3>Switch language (<code>pseudoLocale</code>)</h3>
              <p>Currently: <strong>{pseudoLocale}</strong></p>
              <p>Switch locale to: <strong>{nextLocale}</strong></p>
            </a>
          </Link>

          <div className={styles.card}>
            <h3>Props</h3>
            <p>locale (useRouter): <code>{JSON.stringify({ locales, locale, defaultLocale }, null, 2)}</code></p>
            <p>pseudoLocale: <code>{JSON.stringify({ pseudoLocales, pseudoLocale }, null, 2)}</code></p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://github.com/tomsoderlund/nextjs-multi-domain-locale'
          target='_blank'
          rel='noopener noreferrer'
        >
          Get the source code
        </a>
      </footer>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ params: { pseudoLocale = 'en' }, locale = 'site1' }) => {
    // ...
 
    return {
        props: {
          pseudoLocale
        },
        revalidate: 60 // Seconds. This refresh time could be longer depending on how often data changes.
    }
  }


export const getStaticPaths: GetStaticPaths = async ({ locales }) => {

 console.log(locales)

    // ...
    return {
        paths: [
          { params: { pseudoLocale: 'en' }, locale: 'site1' }
        ],
        fallback: "blocking" // true -> build page if missing, false -> serve 404
      }

      /* return {
        paths: [
          { params: { pseudoLocale: 'en' }, locale: 'site1' }
        ],
        fallback: true // true -> build page if missing, false -> serve 404
      } */
  }