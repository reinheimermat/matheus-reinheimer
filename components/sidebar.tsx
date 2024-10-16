'use client'

import {
  ExternalLink,
  FileUser,
  Flame,
  Github,
  House,
  Linkedin,
  Mail,
  UserRound,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const links = [
  { href: '/', label: 'Home', icon: <House size={14} /> },
  { href: '/about', label: 'About', icon: <UserRound size={14} /> },
  { href: '/skills', label: 'Skills', icon: <Flame size={14} /> },
  { href: '/resume', label: 'Resume', icon: <FileUser size={14} /> },
]

const externalLinks = [
  {
    href: 'https://github.com/reinheimermat',
    label: 'Github',
    icon: <Github size={14} />,
  },
  {
    href: 'https://linkedin.com/in/reinheimermat',
    label: 'Linkedin',
    icon: <Linkedin size={14} />,
  },
  {
    href: 'mailto:contatoreinheimer@gmail.com',
    label: 'Email',
    icon: <Mail size={14} />,
  },
]

export function Sidebar() {
  const currentPath = usePathname()

  return (
    <aside className="fixed flex h-[calc(100vh-32px)] w-full max-w-72 flex-col gap-5 rounded-bl-lg rounded-br-[36px] rounded-tl-[36px] rounded-tr-lg bg-zinc-100 px-2 py-6 text-sm">
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

      <div className="flex flex-col gap-0.5">
        {links.map(({ href, label, icon }, index) => (
          <Link
            key={index}
            href={href}
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
          {externalLinks.map(({ href, label, icon }, index) => (
            <Link
              key={index}
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
    </aside>
  )
}
