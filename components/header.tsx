'use client'

import { ExternalLink, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { externalLinks, links } from './sidebar'
import Link from 'next/link'

export function Header() {
  const currentPath = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  function handleMenuOpen() {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className={twMerge('flex justify-between', !isOpen && 'px-3 py-6')}>
      <a href="/">Matheus Reinheimer</a>

      <button onClick={handleMenuOpen} type="button">
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="absolute z-10 flex h-full w-screen flex-col gap-6 bg-zinc-100 px-2 py-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
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
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-zinc-950 transition-colors hover:bg-zinc-200 hover:transition-colors active:bg-zinc-300',
                  currentPath === href && 'bg-zinc-200 hover:bg-zinc-300',
                )}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <h2 className="px-3">Social</h2>

          <div className="flex flex-col">
            <div className="space-y-0.5">
              {externalLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-zinc-200 active:bg-zinc-300"
                >
                  {icon}
                  <span>{label}</span>
                  <ExternalLink size={14} className="ms-auto block" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <nav className="flex gap-11">
        
      </nav> */}
    </header>
  )
}
