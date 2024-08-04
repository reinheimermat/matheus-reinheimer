'use client'

import clsx from 'clsx'
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
  NotebookPen,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// import myself from '@/app/assets/myself.png'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/stack', label: 'Stack' },
]

export default function Sidebar() {
  const pathName = usePathname()

  return (
    <aside className="fixed flex h-screen w-full max-w-72 flex-col space-y-8 py-6 ps-8">
      <Image
        className="block"
        src="https://github.com/reinheimermat.png"
        alt="Logo"
        width={60}
        height={60}
        quality={100}
      />

      <div className="flex flex-col gap-1 uppercase text-zinc-400">
        {links.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            className={clsx(
              'rounded-lg px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900',
              {
                'bg-zinc-200 text-zinc-950 hover:bg-zinc-200/70 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/70':
                  pathName === href,
              },
            )}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="space-y-4">
        <span className="text-sm text-zinc-400">Journal</span>

        <div className="space-y-3">
          <Link
            href="/guestbook"
            className="flex items-center gap-2 hover:text-zinc-700 dark:hover:text-zinc-300 dark:hover:underline"
          >
            <MessageCircleMore size={16} />
            <p className="text-sm">Guestbook</p>
          </Link>

          <Link
            href="/guestbook"
            className="flex items-center gap-2 hover:text-zinc-700 dark:hover:text-zinc-300 dark:hover:underline"
          >
            <NotebookPen size={16} />
            <p className="text-sm">Guestbook</p>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <span className="text-sm text-zinc-400">Social</span>

        <div className="space-y-3">
          <Link
            href="https://github.com/reinheimermat"
            target="_blank"
            className="flex items-center justify-between gap-2 hover:text-zinc-700 dark:hover:text-zinc-300 dark:hover:underline"
          >
            <div className="flex items-center gap-2">
              <Github className="size-4" />
              <p className="text-sm">Github</p>
            </div>
            <ExternalLink size={16} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/reinheimermat/"
            target="_blank"
            className="flex items-center justify-between gap-2 hover:text-zinc-700 dark:hover:text-zinc-300 dark:hover:underline"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="size-4" />
              <p className="text-sm">Linkedin</p>
            </div>
            <ExternalLink size={16} />
          </Link>

          <Link
            href="mailto:contatoreinheimer@gmail.com"
            target="_blank"
            className="flex items-center justify-between gap-2 hover:text-zinc-700 dark:hover:text-zinc-300 dark:hover:underline"
          >
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <p className="text-sm">Github</p>
            </div>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </aside>
  )
}
