import { cn } from '@/lib/utils'
import Image, { type StaticImageData } from 'next/image'
import type React from 'react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps<T> extends React.HTMLAttributes<T> {
  children?: ReactNode
  href?: string
  alt?: string
}

interface CardImageProps extends CardProps<HTMLImageElement> {
  src: string | StaticImageData
  alt: string
  width: number
  height: number
}

function CardRoot({ children, className }: CardProps<HTMLDivElement>) {
  return (
    <div
      className={twMerge('space-y-4 rounded-[36px] bg-zinc-100 p-6', className)}
    >
      {children}
    </div>
  )
}

function CardImage({ src, alt, className, width, height }: CardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={100}
      className={twMerge('w-full rounded-3xl', className)}
    />
  )
}

function CardExternalLink({ href, children }: CardProps<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="my-auto flex items-center justify-center rounded-full bg-lime-300 p-2 hover:bg-lime-400"
    >
      <div>{children}</div>
    </a>
  )
}

function CardBox({ children, className }: CardProps<HTMLDivElement>) {
  return <div className={twMerge('space-y-2', className)}>{children}</div>
}

function CardTitle({ children }: CardProps<HTMLTitleElement>) {
  return <h2 className="text-2xl font-semibold">{children}</h2>
}

function CardDescription({ children }: CardProps<HTMLTitleElement>) {
  return <h3 className="text-sm text-zinc-500">{children}</h3>
}

function CardText({ children, className }: CardProps<HTMLTitleElement>) {
  return <p className={cn('text-zinc-700', className)}>{children}</p>
}

export const Card = {
  Title: CardTitle,
  Description: CardDescription,
  Text: CardText,
  Root: CardRoot,
  Box: CardBox,
  Image: CardImage,
  ExternalLink: CardExternalLink,
}
