import { localeKeys as locales, defaultLocale } from 'astro-i18n-aut'
import { translationsMap } from './'
import { useTranslations as translator } from '@simplified-stack/i18n'

const trailingSlash = import.meta.env['VITE_SITE_TRAILING_SLASH'] === 'true'
const BASE_PATHNAME = '/'

export function useTranslations(locale: string) {
  const { t, l, tList } = translator(
    locale,
    locales,
    translationsMap,
    trailingSlash,
    defaultLocale,
    BASE_PATHNAME,
  )
  return { t, l, tList }
}
