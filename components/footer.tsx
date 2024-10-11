import { Github, LinkedinIcon, Mail } from 'lucide-react'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-28 bg-zinc-900 py-16 text-zinc-400">
      <div className="container mx-auto space-y-16">
        <h2 className="text-center text-4xl font-bold">
          Nice to see you here!
        </h2>
        <div className="flex justify-between">
          <section className="space-y-2">
            <div>mreinheimer0@gmail.com</div>
            <div>This website was built with Astro.JS and Tailwind CSS</div>
            <div>@ {year} Matheus Reinheimer</div>
          </section>
          <section className="flex gap-4">
            <Github size="24" />
            <LinkedinIcon size="24" />
            <Mail size="24" />
          </section>
        </div>
      </div>
    </footer>
  )
}
