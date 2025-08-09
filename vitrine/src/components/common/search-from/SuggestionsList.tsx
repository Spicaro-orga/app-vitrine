import type { Artwork } from '@spicaro/vitrine/types'

export default function SuggestionList({
  suggestions,
  currentFocus,
  suggestionRefs,
  createArtworkUrl,
}: Readonly<{
  suggestions: Artwork[]
  currentFocus: number
  suggestionRefs: React.MutableRefObject<HTMLLIElement[]>
  createArtworkUrl: (artwork: Artwork) => string
}>) {
  return (
    <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-black shadow shadow-white">
      {suggestions.map((artwork, index) => (
        <li
          key={artwork.id}
          ref={(el) => el && (suggestionRefs.current[index] = el)}
          className={`suggestion-item flex items-center p-2 ${
            currentFocus === index ? 'bg-blue-500 text-white' : ''
          }`}
        >
          <button
            className="flex w-full cursor-pointer items-center"
            onClick={() => (window.location.href = createArtworkUrl(artwork))}
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="mr-2 inline-block h-10 w-10 object-cover"
            />
            {artwork.title} by {artwork.artist}
          </button>
        </li>
      ))}
    </ul>
  )
}
