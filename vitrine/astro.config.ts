import tailwind from '@astrojs/tailwind'
import { env } from 'process'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'

import { filterSitemapByDefaultLocale, i18n } from 'astro-i18n-aut/integration'
import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent'

import sitemap from '@astrojs/sitemap'

const locales = {
  en: 'en-US',
  fr: 'fr-FR',
}

const defaultLocale = 'fr'
const trailingSlash =
  env['VITE_SITE_TRAILING_SLASH'] === 'true' ? 'always' : 'never'
const format = trailingSlash === 'always' ? 'directory' : 'file'

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  srcDir: './src',
  publicDir: './public',

  site: env['VITE_SITE_URL'] || 'https://www.spicaro.com',
  base: '/',
  trailingSlash,

  build: {
    format,
  },

  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.js',
    }),

    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({
        defaultLocale,
      }),
    }),
    jopSoftwarecookieconsent({
      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {},
      },
      guiOptions: {
        consentModal: {
          layout: 'bar inline',
          position: 'bottom',
          flipButtons: true,
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: 'box',
          // position: 'left right',
          flipButtons: false,
          equalWeightButtons: true,
        },
      },

      language: {
        autoDetect: 'document',
        default: 'fr',

        translations: {
          fr: {
            consentModal: {
              title: 'Nous utilisons quelques cookies.',
              description:
                "En cliquant sur « Accepter tous les cookies », vous consentez à l'utilisation de tous les cookies décrits ci-dessous. Vous pouvez également personnaliser vos choix en matière de cookies en cliquant sur « Paramétrer les cookies ».",

              acceptAllBtn: 'Accepter tous les cookies',
              acceptNecessaryBtn: 'Refuser tous les cookies non essentiels',
              showPreferencesBtn: 'Paramétrer les cookies',
            },
            preferencesModal: {
              title: 'Paramétrer les cookies',
              acceptAllBtn: 'Accepter tous les cookies',
              acceptNecessaryBtn: 'Refuser tous les cookies non essentiels',
              savePreferencesBtn: 'Accepter la sélection actuelle',
              closeIconLabel: 'Fermer la fenêtre modale',
              sections: [
                {
                  title: 'Performance et analyse',
                  description:
                    'Ces cookies collectent des informations sur votre utilisation de ce site web. Toutes les données sont anonymisées et ne peuvent pas être utilisées pour vous identifier.',
                  linkedCategory: 'analytics',
                },
              ],
            },
          },

          en: {
            consentModal: {
              title: 'We use some cookies',
              description:
                'By clicking on « Accept all cookies », you consent to the use of all the cookies described below. You can also customize your cookie choices by clicking on « Manage Individual preferences ».',
              acceptAllBtn: 'Accept All Cookies',
              acceptNecessaryBtn: 'Reject All Non-Essential Cookies',
              showPreferencesBtn: 'Cookie Settings',
            },
            preferencesModal: {
              title: 'Reject All Non-Essential Cookies',
              acceptAllBtn: 'Accept All Cookies',
              acceptNecessaryBtn: 'Reject All Non-Essential Cookies',
              savePreferencesBtn: 'Accept current selection',
              closeIconLabel: 'Close modal',
              sections: [
                {
                  title: 'Performance and Analytics',
                  description:
                    'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                  linkedCategory: 'analytics',
                },
              ],
            },
          },
        },
      },
    }),
  ],
  devToolbar: {
    enabled: env.CI !== 'true',
  },
  vite: {
    ssr: {
      noExternal: ['vanilla-cookieconsent'], // Add this line
    },
  },
})
