import { ReactNode } from 'react'

interface BadgeProps {
  icon: ReactNode
  label: string
}

export function Badge({ icon, label }: BadgeProps) {
  return (
    <a
      href="#"
      className="flex w-52 items-center gap-3 rounded-md bg-zinc-100 p-3 shadow-sm shadow-zinc-100 transition-colors hover:bg-zinc-200/50 hover:transition-colors"
    >
      <div className="relative flex items-center justify-center rounded-md bg-zinc-200 p-2 text-2xl">
        {icon}
        <div className="absolute blur-md">{icon}</div>
      </div>
      <p className="text-sm font-semibold">{label}</p>
    </a>
  )
}
