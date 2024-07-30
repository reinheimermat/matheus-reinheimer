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

import myself from '@/app/assets/myself.png'

export default function Sidebar() {
  return (
    <aside className="fixed flex h-screen w-full max-w-72 flex-col space-y-8 py-6 ps-8">
      <Image className="block" src={myself} alt="Logo" width={60} height={60} />

      <div className="flex flex-col gap-4 uppercase text-zinc-400">
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/stack">Stack</Link>
      </div>

      <div className="space-y-4">
        <span className="text-sm text-zinc-400">Journal</span>

        <div className="space-y-3">
          <Link
            href="/guestbook"
            className="flex items-center gap-2 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            <MessageCircleMore size={16} />
            <p className="text-sm">Guestbook</p>
          </Link>

          <Link
            href="/guestbook"
            className="flex items-center gap-2 hover:text-zinc-700 dark:hover:text-zinc-300"
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
            className="flex cursor-pointer justify-between hover:text-zinc-700 dark:hover:text-zinc-300"
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
            className="flex justify-between hover:text-zinc-700 dark:hover:text-zinc-300"
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
            className="flex justify-between hover:text-zinc-700 dark:hover:text-zinc-300"
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
