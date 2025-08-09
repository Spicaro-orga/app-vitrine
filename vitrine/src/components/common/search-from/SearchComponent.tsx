import { useState, useRef, useEffect } from 'react'
import { useTranslations } from '../../../i18n/translator'
import artworks from '../../../pages/_artwork.json'
import SearchIcon from './SearchIcon'
import SearchInput from './SearchInput'
import type { Artwork } from '@spicaro/vitrine/types'
import SuggestionList from './SuggestionsList'

function SearchComponent({ locale }: Readonly<{ locale: string }>) {
  const [query, setQuery] = useState('')
  const [currentFocus, setCurrentFocus] = useState(-1)
  const [suggestions, setSuggestions] = useState<Artwork[]>([])
  const suggestionRefs = useRef<HTMLLIElement[]>([])
  const { t } = useTranslations(locale)

  // Create URL for artwork
  const createArtworkUrl = (artwork: Artwork) => `/artwork/${artwork.id}`

  // Handle input change
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setQuery(value)

    // Filter artworks based on the query
    const filteredArtworks = artworks.filter(
      (artwork) =>
        artwork.title.toLowerCase().includes(value) ||
        artwork.artist.toLowerCase().includes(value),
    )

    setSuggestions(filteredArtworks)
    setCurrentFocus(-1) // Reset focus on each new search
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      // Move down the suggestion list
      setCurrentFocus((prevFocus) => (prevFocus + 1) % suggestions.length)
    } else if (e.key === 'ArrowUp') {
      // Move up the suggestion list
      setCurrentFocus(
        (prevFocus) =>
          (prevFocus - 1 + suggestions.length) % suggestions.length,
      )
    } else if (e.key === 'Enter') {
      // On pressing Enter, navigate to the selected suggestion
      if (currentFocus > -1 && suggestions[currentFocus]) {
        window.location.href = createArtworkUrl(suggestions[currentFocus])
      }
    }
  }

  // Add focus to the current suggestion item
  useEffect(() => {
    if (currentFocus > -1 && suggestionRefs.current[currentFocus]) {
      suggestionRefs.current[currentFocus].scrollIntoView({
        block: 'nearest',
      })
    }
  }, [currentFocus])

  return (
    <form className="relative w-full text-sm">
      <SearchIcon />
      <SearchInput
        query={query}
        onSearch={onSearch}
        onKeyDown={handleKeyDown}
        placeholder={t('home.search')}
      />
      {suggestions.length > 0 && query && (
        <SuggestionList
          suggestions={suggestions}
          currentFocus={currentFocus}
          suggestionRefs={suggestionRefs}
          createArtworkUrl={createArtworkUrl}
        />
      )}
    </form>
  )
}

// Component for the search input

// Component for the suggestion list

export default SearchComponent
