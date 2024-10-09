import { Skeleton } from '../ui/skeleton'

export function TitleSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-9">
      <Skeleton className="h-14 w-full max-w-screen-lg" />
      <Skeleton className="h-12 w-full max-w-screen-md" />
    </div>
  )
}
