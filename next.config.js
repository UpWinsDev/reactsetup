/** @type {import('next').NextConfig} */


const withImages = require('next-images')

// Next.js’ i18n `locale` is used to determine the site:
const sites = {

    amparo: {
        id: '1',
        domain: 'multi1-domain.com:3301',
        name: 'Amparoapp',
        stylecustom: {
            colors: {
                primary: "#565175",
                secondary: "#538a95",
                tertiary: "#67b79e",
                quarternary: "#ffb727",
                quinary: "#e4491c"
            }
        },
        locales: {
            en: { title: 'Amparo - Whitelabel', description: 'Desenvolvimento multi tenant, para multiplos dominios em um unico app.' },
            se: { title: 'Den första webbplatsen', description: 'Det här är beskrivningen för den första webbplatsen.' }
        }
    },
    mavicard: {
        id: '2',
        domain: 'multi2-domain.com:3301',
        name: 'Mavicard',
        stylecustom: {
            colors: {
                primary: "#04394e",
                secondary: "#00875e",
                tertiary: "#a7cc15",
                quarternary: "#f5cc17",
                quinary: "#f56217"
            }
        },
        locales: {
            en: { title: 'Mavicard - Whitelabel', description: 'Desenvolvimento multi tenant, para multiplos dominios em um unico app.' },
            se: { title: 'Den andra webbplatsen', description: 'Det här är beskrivningen för den andra webbplatsen.' }
        }
    },
    you: {
        id: '3',
        domain: 'multi3-domain.com:3301',
        name: 'You',
        locales: {
            en: { title: 'You - Whitelabel', description: 'Desenvolvimento multi tenant, para multiplos dominios em um unico app.' },
            se: { title: 'Den andra webbplatsen', description: 'Det här är beskrivningen för den andra webbplatsen.' }
        }

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