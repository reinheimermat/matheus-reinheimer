'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme } = useTheme()
  const html = document.querySelector('html')
  const [isDark, setIsDark] = useState(false)

  function handleChangeTheme() {
    if (isDark) {
      setTheme('light')
      setIsDark(false)
    } else {
      setTheme('dark')
      setIsDark(true)
    }
  }

  useEffect(() => {
    if (html?.classList.contains('dark')) {
      setIsDark(true)
    }
  }, [html])

  return (
    <div
      className={cn(
        'mt-auto grid grid-cols-2 items-center rounded-full border border-zinc-200 bg-zinc-200/50 p-1 dark:border-zinc-700/50 dark:bg-zinc-800/50',
        className,
      )}
    >
      <button
        className={twMerge(
          'flex items-center justify-center gap-2 rounded-full px-6 py-2',
          !isDark &&
            'border border-zinc-300 bg-zinc-300/50 hover:border-zinc-400/50 hover:bg-zinc-300',
        )}
        onClick={handleChangeTheme}
      >
        <Sun size={14} /> <span>Light</span>
      </button>
      <button
        className={twMerge(
          'flex items-center justify-center gap-2 rounded-full px-6 py-2',
          isDark &&
            'border dark:border-zinc-700 dark:bg-zinc-700/50 dark:hover:border-zinc-600 dark:hover:bg-zinc-700',
        )}
        onClick={handleChangeTheme}
      >
        <Moon size={14} /> <span>Dark</span>
      </button>
    </div>
  )
}
