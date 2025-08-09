import { en } from './en'
import { fr } from './fr'
type Translations = typeof en
export const translationsMap: Record<string, Translations> = {
  en,
  fr,
}
