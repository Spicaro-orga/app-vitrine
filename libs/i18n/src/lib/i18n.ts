import type { GetKeys, GetKeysForArrayValues } from './types'
// translator.ts
import { getLocalizedPermalink } from './linksUtils'
import { getListFromPath, getStringFromPath } from './utils'

// Function to provide translations based on selected language
export function useTranslations<T>(
  lang: string,
  locales: string[],
  translationsMap: Record<string, T>,
  trailingSlash: boolean,
  defaultLocale: string,
  BASE_PATHNAME = '/',
) {
  // Validate language
  if (!locales.includes(lang)) {
    throw new Error(`Unsupported language: ${lang}`)
  }

  // Retrieve translations for the selected language
  const translations = translationsMap[lang]

  // Throw error if translations not found
  if (!translations) {
    throw new Error(`Translations not found for language: ${lang}`)
  }

  // Return object with translation function
  return {
    t: function (key: GetKeys<typeof translations>) {
      // Retrieve translation for the specified key
      if (!key) {
        throw new Error(
          `Translation key "${key}" not found in "${lang}" locale`,
        )
      }

      const value = getStringFromPath(translations, key as string)

      // Throw error if translation not found
      if (value !== undefined) {
        return value
      } else {
        throw new Error(
          `Translation key "${key}" not found in "${lang}" locale`,
        )
      }
    },
    l: function (slug = '') {
      return getLocalizedPermalink(
        lang,
        trailingSlash,
        defaultLocale,
        BASE_PATHNAME,
        slug,
      )
    },
    tList: function (key: GetKeysForArrayValues<typeof translations>) {
      const value = getListFromPath(translations, key as string)

      if (value !== undefined) {
        return value
      } else {
        throw new Error(
          `List translation key "${key}" not found in "${lang}" locale`,
        )
      }
    },
  }
}
