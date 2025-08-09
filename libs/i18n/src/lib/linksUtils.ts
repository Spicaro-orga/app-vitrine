import { trim } from './utils'

export const trimSlash = (s: string) => trim(trim(s, '/'))
/**
 * Concatenate input paths into a single path, handling leading and trailing slashes.
 *
 * @param {string} ...params - The input parameters to be concatenated into a path.
 * @return {string} The concatenated path with proper leading and trailing slash handling.
 */
const createPath = (trailingSlash: boolean, ...params: string[]): string => {
  // Map each path to trimmed version and remove empty strings
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el)

  // Join the paths with a '/' and a trailing '/' if necessary
  const path = `/${paths.join('/')}${trailingSlash && paths.length ? '/' : ''}`

  return path
}

/**
 * Returns the permalink for a given slug.
 * - Concatenates the base pathname and the given slug into a single path.
 * - The resulting path always starts with a leading slash ('/')
 * - If the trailing slash is enabled in the VITE_SITE_TRAILING_SLASH env var, it is added to the path.
 * @param slug The slug to be concatenated to the base pathname.
 * @return The resulting permalink string.
 */
export const getPermalink = (
  trailingSlash: boolean,
  BASE_PATHNAME = '/',
  slug = '',
): string => {
  // Concatenate the base pathname and the given slug into a single path
  const concatPath = createPath(trailingSlash, slug)
  // Prepend the base pathname to the concatenated path
  const withBasePathname = createPath(trailingSlash, BASE_PATHNAME, concatPath)
  // Return the resulting path with proper trailing slash handling
  return withBasePathname
}

/**
 * Returns the localized permalink for a given slug and locale.
 * - If the locale is the default locale, the permalink is just the concatenation of the given slug
 * - Otherwise, the permalink is the concatenation of the locale and the given slug
 * @param locale The locale to use for the permalink
 * @param slug The slug to be concatenated to the base pathname.
 * @return The resulting localized permalink string.
 */
export const getLocalizedPermalink = (
  locale: string,
  trailingSlash: boolean,
  defaultLocale: string,
  BASE_PATHNAME = '/',
  slug = '',
): string => {
  // If locale is default, just get the permalink for the slug
  if (locale === defaultLocale) {
    const permalink = getPermalink(trailingSlash, BASE_PATHNAME, slug)
    return permalink
  }

  // Otherwise, concatenate the locale and the slug to get the localized permalink
  const localizedPath = createPath(trailingSlash, locale, slug)
  return localizedPath
}
