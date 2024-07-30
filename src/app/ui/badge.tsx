import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface BadgeProps {
  src: StaticImageData
  title: string
}

export default function Badge({ src, title }: BadgeProps) {
  return (
    <Link
      href="/"
      target="_blank"
      className="flex w-full items-center gap-3 rounded-md bg-zinc-100 p-3 shadow-md shadow-zinc-200 transition-all ease-in-out hover:bg-zinc-100/40 dark:bg-zinc-900 dark:shadow-zinc-900 dark:hover:bg-zinc-900/80"
    >
      <Image
        src={src}
        alt="Logo"
        width={40}
        height={40}
        className="size-10 rounded-md object-cover"
      />

      <span>{title}</span>
    </Link>
  )
}
