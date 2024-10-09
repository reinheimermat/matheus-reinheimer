import type React from 'react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Skeleton } from '../ui/skeleton'

interface CardSkeletonProps<T> extends React.HTMLAttributes<T> {
  children?: ReactNode
  href?: string
  alt?: string
}

function CardRoot({ children, className }: CardSkeletonProps<HTMLDivElement>) {
  return <div className={twMerge(className)}>{children}</div>
}

function CardBox({ children, className }: CardSkeletonProps<HTMLDivElement>) {
  return <div className={twMerge(className)}>{children}</div>
}

function CardTitle({ className }: CardSkeletonProps<HTMLTitleElement>) {
  return <Skeleton className={twMerge(className)} />
}

function CardDescription({ className }: CardSkeletonProps<HTMLTitleElement>) {
  return <Skeleton className={twMerge(className)} />
}

function CardText({ className }: CardSkeletonProps<HTMLTitleElement>) {
  return <Skeleton className={twMerge(className)} />
}

export const CardSkeleton = {
  Title: CardTitle,
  Description: CardDescription,
  Text: CardText,
  Root: CardRoot,
  Box: CardBox,
}
