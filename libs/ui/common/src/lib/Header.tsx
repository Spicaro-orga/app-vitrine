import { LangSwitcher } from '..'
import Burger from './Burger'
import Nav from './Nav'

export default function Header({
  navLinks,
  homeLink,
  langSwitcher,
  children,
}: Readonly<{
  homeLink?: string
  navLinks: { link: string; text: string }[]
  langSwitcher?: {
    locale: string
    locales: string[]
    defaultLocale: string
    trailingSlash: boolean | undefined
  }
  children?: React.ReactNode
}>) {
  return (
    <header className="flex max-h-32 items-center justify-between py-4 px-4 md:px-14">
      <a
        href={homeLink}
        className="flex items-end gap-1 md:text-5xl"
        aria-label="Spicaro Home"
      >
        <img src="/mob_logo.svg" alt="Spicaro Logo" className="h-18 md:h-24" />
      </a>
      <div className="flex items-center justify-between gap-4 text-sm md:flex">
        <div className="hidden md:flex">
          <Nav navLinks={navLinks} />
        </div>
        {langSwitcher && (
          <div className="flex items-center md:hidden">
            <LangSwitcher
              trailingSlash={langSwitcher.trailingSlash}
              locales={langSwitcher.locales}
              currentLocale={langSwitcher.locale}
              defaultLocale={langSwitcher.defaultLocale}
            />
          </div>
        )}
        <Burger>
          <Nav navLinks={navLinks} />
        </Burger>
        {children}
      </div>
    </header>
  )
}
