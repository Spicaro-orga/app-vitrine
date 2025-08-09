import { useState, useEffect } from 'react'

export default function Nav({
  navLinks,
  children,
  listStylesClass,
}: Readonly<{
  navLinks: { link: string; text: string }[]
  children?: React.ReactNode
  listStylesClass?: string
}>) {
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const currentPath = window.location.pathname

    setActiveLink(currentPath)
  }, [])

  return (
    <nav className="text-sm">
      <ul
        className={
          listStylesClass ??
          'flex h-full flex-col items-center gap-8 md:flex-row'
        }
      >
        {navLinks.map((link) => (
          <li key={link.link}>
            <a
              href={link.link}
              className={`hover:underline ${activeLink === link.link ? 'underline' : ''}`}
              aria-label={link.text}
            >
              {link.text}
            </a>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  )
}
