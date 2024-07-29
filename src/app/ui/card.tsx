import Image, { StaticImageData } from 'next/image'

interface CardProps {
  src: StaticImageData
  alt: string
  title: string
  date: string
  description: string
}

export default function Card({
  src,
  title,
  date,
  description,
  alt,
}: CardProps) {
  return (
    <div className="col-span-1 w-full space-y-6">
      <Image
        src={src}
        className="min-h-48 w-full rounded-3xl object-cover"
        alt={alt}
      />
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-sm text-zinc-400">{date}</span>
        <p className="text-sm text-zinc-200">{description}</p>
      </div>
    </div>
  )
}
