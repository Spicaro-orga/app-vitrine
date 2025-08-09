import { useEffect, useState } from 'react'

import * as CookieConsent from 'vanilla-cookieconsent'

export default function LanguagePicker({
  locales,
  defaultLocale,
  trailingSlash,
  currentLocale,
}: Readonly<{
  locales: string[]
  defaultLocale: string
  trailingSlash: boolean | undefined
  currentLocale: string
}>) {
  const [selectedLocale, setSelectedLocale] = useState(currentLocale)

  useEffect(() => {
    document.documentElement.lang = selectedLocale
    CookieConsent.setLanguage(selectedLocale)
  }, [selectedLocale])

  function handleLanguageChange(e: string) {
    // Get the selected language from the event target value
    const selectedLang = e
    setSelectedLocale(selectedLang)

    // Get the current URL and origin
    const { href, origin } = window.location

    // Get the list of supported languages
    const supportedLangs = locales

    // Remove the origin from the URL
    const urlWithoutOrigin = href.replace(origin, '')

    // Remove the language path from the URL
    const urlWithoutOriginLang = supportedLangs.reduce(
      (acc, lang) => acc.replace(`/${lang}`, ''),
      urlWithoutOrigin,
    )

    // Remove the trailing slash from the URL
    const newUrlWithoutTrailingSlash = urlWithoutOriginLang.replace(/\/$/, '')

    // Create the new URL with the selected language and the modified path
    let newUrl = `/${selectedLang}${newUrlWithoutTrailingSlash}`

    // If the selected language is the default locale, remove the language prefix
    if (selectedLang === defaultLocale) {
      newUrl = newUrlWithoutTrailingSlash
    }

    // Ensure there's no trailing slash if configured
    if (trailingSlash) {
      newUrl += '/'
    }

    // Redirect the user to the new URL
    window.location.pathname = newUrl
    document.documentElement.lang = selectedLang

    currentLocale = selectedLang
  }

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${selectedLocale === 'fr' ? 'text-gray-400 underline' : ''}`}
      >
        <button
          className="hover:underline"
          onClick={() => handleLanguageChange('fr')}
        >
          Fr
        </button>
      </div>
      {'/'}
      <div
        className={`${selectedLocale === 'en' ? 'text-gray-400 underline' : ''}`}
      >
        <button
          className="hover:underline"
          onClick={() => handleLanguageChange('en')}
        >
          En
        </button>
      </div>
    </div>
  )
}
