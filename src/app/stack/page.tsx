import rocketseat from '@/app/assets/rocketseat.png'

import Badge from '../ui/badge'

export default function Stack() {
  return (
    <main className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold">Stack and uses</h1>
        <h2 className="w-2/3 text-zinc-500 dark:text-zinc-400">
          Explore the technologies and tools that power my development journey.
          I carefully choose and leverage these tools to create robust,
          efficient, and user-centric solutions.
        </h2>
      </div>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Front-end</h3>

        <div className="grid grid-cols-5 gap-3">
          <Badge src={rocketseat} title="Next JS" />
          <Badge src={rocketseat} title="Next JS" />
          <Badge src={rocketseat} title="Next JS" />
          <Badge src={rocketseat} title="Next JS" />
          <Badge src={rocketseat} title="Next JS" />
          <Badge src={rocketseat} title="Next JS" />
          <Badge src={rocketseat} title="Next JS" />
          <Badge src={rocketseat} title="Next JS" />
        </div>
      </section>
    </main>
  )
}
