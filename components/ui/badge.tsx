import { ReactNode } from 'react'

interface BadgeProps {
  icon: ReactNode
  label: string
}

export function Badge({ icon, label }: BadgeProps) {
  return (
    <a
      href="#"
      className="flex w-full items-center gap-3 rounded-md bg-zinc-100 p-3 shadow-zinc-100 transition-colors hover:bg-zinc-200/50 hover:transition-colors dark:bg-zinc-900 dark:shadow-shape dark:hover:bg-zinc-700/40 md:w-52"
    >
      <div className="relative flex items-center justify-center rounded-md bg-zinc-200 p-2 text-2xl dark:bg-zinc-800">
        {icon}
        <div className="absolute blur-md">{icon}</div>
      </div>
      <p className="text-sm font-semibold">{label}</p>
    </a>
  )
}
