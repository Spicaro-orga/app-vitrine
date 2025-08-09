import { Popover, PopoverContent, PopoverTrigger } from '@spicaro/shadcn'
import { useState, useEffect } from 'react'

export default function Burger({
  className,
  children,
}: Readonly<{ className?: string; children?: React.ReactNode }>) {
  const [open, setOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div
        className={`${className ?? 'flex items-center justify-center gap-6 md:hidden'}`}
      >
        <button className="relative flex h-12 w-12 items-center justify-center">
          <img
            src="/icons/mob_menu_open.svg"
            alt="open menu"
            className="h-12 w-12"
          />
        </button>
      </div>
    )
  }

  return (
    <div
      className={`${className ?? 'flex items-center justify-center gap-6 md:hidden'}`}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="relative flex h-12 w-12 items-center justify-center">
          {/* Open Icon */}
          <img
            src="/icons/mob_menu_open.svg"
            alt="open menu"
            className={`duration-600 absolute h-12 w-12 transition-opacity ease-in-out ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Close Icon */}
          <img
            src="/icons/mob_menu_close.svg"
            alt="close menu"
            className={`duration-600 absolute h-12 w-12 transition-opacity ease-in-out ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </PopoverTrigger>
        <PopoverContent
          className="flex h-full w-screen min-w-full flex-col items-center overflow-y-auto border-none bg-black pt-8 md:hidden"
          side="bottom"
          sideOffset={20}
        >
          {children}
        </PopoverContent>
      </Popover>
    </div>
  )
}
