'use client'

import { ExternalLink, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { externalLinks, links } from './sidebar'
import Link from 'next/link'
import { ThemeToggle } from './ui/theme-toggle'
import { useQueryState } from 'nuqs'

export function Header() {
  const currentPath = usePathname()
  const [isMenuOpenInUrl, setIsMenuOpenInUrl] = useQueryState('menu', {
    defaultValue: false,
    parse: (value) => value === 'open',
    serialize: (value) => (value ? 'open' : 'closed'),
  })

  function handleMenuOpen() {
    setIsMenuOpenInUrl(!isMenuOpenInUrl)

    if (isMenuOpenInUrl) {
      setIsMenuOpenInUrl(null)
    }
  }

  return (
    <header
      className={twMerge(
        'flex justify-between',
        !isMenuOpenInUrl && 'px-3 py-6',
      )}
    >
      <a href="/">Matheus Reinheimer</a>

      <button onClick={handleMenuOpen} type="button">
        <Menu size={24} />
      </button>

      {isMenuOpenInUrl && (
        <div className="absolute z-10 flex h-screen w-screen flex-col gap-6 bg-zinc-100 px-2 py-6 dark:bg-zinc-900">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 px-1">
              <Image
                src="https://github.com/reinheimermat.png"
                alt="My Image"
                width={24}
                height={24}
                quality={100}
              />
              <span>Reinheimer&apos;s Portfolio</span>
            </div>

            <button onClick={handleMenuOpen} type="button">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-0.5">
            {links.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={handleMenuOpen}
                className={twMerge(
                  'flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-zinc-200 hover:transition-colors active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700',
                  currentPath === href &&
                    'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700',
                )}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <h2 className="px-3 text-zinc-500 dark:text-zinc-300">Social</h2>

          <div className="flex flex-col">
            <div className="space-y-0.5">
              {externalLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
                >
                  {icon}
                  <span>{label}</span>
                  <ExternalLink size={14} className="ms-auto block" />
                </Link>
              ))}
            </div>
          </div>

          <ThemeToggle className="mx-2" />
        </div>
      )}
    </header>
  )
}
