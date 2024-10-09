import type React from 'react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps<T> extends React.HTMLAttributes<T> {
  children: ReactNode
  href?: string
  alt?: string
}

function CardRoot({ children, className }: CardProps<HTMLDivElement>) {
  return <div className={twMerge('space-y-6', className)}>{children}</div>
}

function CardBox({ children, className }: CardProps<HTMLDivElement>) {
  return <div className={twMerge('space-y-2', className)}>{children}</div>
}

function CardTitle({ children }: CardProps<HTMLTitleElement>) {
  return <h2 className="text-3xl font-semibold">{children}</h2>
}

function CardDescription({ children }: CardProps<HTMLTitleElement>) {
  return <h3 className="text-zinc-400">{children}</h3>
}

function CardText({ children }: CardProps<HTMLTitleElement>) {
  return <p className="text-lg text-zinc-950">{children}</p>
}

export const Card = {
  Title: CardTitle,
  Description: CardDescription,
  Text: CardText,
  Root: CardRoot,
  Box: CardBox,
}
