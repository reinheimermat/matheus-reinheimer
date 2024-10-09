'use client'

import { usePathname } from 'next/navigation'

export function Header() {
  const currentPath = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: 'https://linkedin.com/in/reinheimermat', label: 'In' },
    { href: 'https://linkedin.com/in/reinheimermat', label: 'Resume' },
  ]

  return (
    <header className="container mx-auto flex items-center justify-between py-14">
      <a href="/">Matheus Reinheimer</a>

      <nav className="flex gap-11">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`${
              currentPath === href ? 'text-zinc-950' : 'text-zinc-400'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
