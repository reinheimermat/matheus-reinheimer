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
import { ThemeToggle } from './ui/theme-toggle'
import * as motion from 'framer-motion/client'

export const links = [
  { href: '/', label: 'Home', icon: <House size={14} /> },
  { href: '/about', label: 'About', icon: <UserRound size={14} /> },
  { href: '/skills', label: 'Skills', icon: <Flame size={14} /> },
  { href: '/resume', label: 'Resume', icon: <FileUser size={14} /> },
]

export const externalLinks = [
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
  const animation = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
    },
    transition: {
      duration: 1,
    },
  }

  return (
    <motion.aside
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={animation.transition}
      className="fixed hidden h-[calc(100vh-32px)] flex-col gap-5 rounded-bl-lg rounded-br-[36px] rounded-tl-[36px] rounded-tr-lg bg-zinc-100 px-4 py-6 text-sm dark:bg-zinc-900 dark:shadow-shape md:flex md:w-auto lg:w-1/4 xl:max-w-72"
    >
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
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={twMerge(
              'flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-zinc-200 hover:transition-colors active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700',
              currentPath === href &&
                'border border-zinc-300/50 bg-zinc-200 hover:border-zinc-300 hover:bg-zinc-300/70 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-700',
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

      <ThemeToggle />
    </motion.aside>
  )
}
