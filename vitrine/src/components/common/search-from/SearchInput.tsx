export default function SearchInput({
  query,
  onSearch,
  onKeyDown,
  placeholder,
}: Readonly<{
  query: string
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder: string
}>) {
  return (
    <input
      type="search"
      id="search"
      value={query}
      onChange={onSearch}
      onKeyDown={onKeyDown}
      className="w-full rounded-full border bg-black p-2 pl-14 outline-none"
      placeholder={`${placeholder}...`}
      autoComplete="off"
    />
  )
}
