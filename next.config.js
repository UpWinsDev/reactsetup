/** @type {import('next').NextConfig} */
/* const nextConfig = {
    reactStrictMode: true,
}

const withImages = require('next-images')


module.exports = (withImages({
    esModule: true
}), nextConfig) */

const withImages = require('next-images')

// Next.js’ i18n `locale` is used to determine the site:
const sites = {
    site1: {
        locales: {
            en: { title: 'Amparo - Whitelabel', description: 'Desenvolvimento multi tenant, para multiplos dominios em um unico app.' },
            se: { title: 'Den första webbplatsen', description: 'Det här är beskrivningen för den första webbplatsen.' }
        },
        domain: 'multi1-domain.com'
    },
    site2: {
        locales: {
            en: { title: 'Mavicard - Whitelabel', description: 'Desenvolvimento multi tenant, para multiplos dominios em um unico app.' },
            se: { title: 'Den andra webbplatsen', description: 'Det här är beskrivningen för den andra webbplatsen.' }
        },
        domain: 'multi2-domain.com'
    }
}
const siteKeys = Object.keys(sites)

// Selecting a language is instead handled via a `pseudoLocale` prop:
const pseudoLocales = ['en', 'se']

module.exports = {
    // next/config: publicRuntimeConfig available on both server and client – restart needed to change
    publicRuntimeConfig: {
        sites,
        pseudoLocales
    },

    reactStrictMode: true,

    withCSS: [withImages({
        esModule: true
    })],

    // We "hijack" Next.js’ i18n system to use for different sites
    i18n: {
        locales: siteKeys,
        defaultLocale: siteKeys[0],
        domains: siteKeys.map(siteKey => ({
            domain: sites[siteKey].domain,
            defaultLocale: siteKey
        }))
    },

    // Redirect / to default pseudoLocale
    redirects: () => (
        [{
            source: '/',
            destination: `/${pseudoLocales[0]}`,
            permanent: true
        }]
    ),

    future: {
        webpack5: true
    }
}