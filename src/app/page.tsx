import Image from 'next/image'

import alura from '@/app/assets/alura.png'
import cover from '@/app/assets/cover.jpg'
import mave from '@/app/assets/mave-cover.jpeg'
import projectiva from '@/app/assets/projectiva.jpeg'
import qi from '@/app/assets/qi.png'
import rocketseat from '@/app/assets/rocketseat.png'

import { fetchGitHubData } from './api/getGithubApi'
import Card from './ui/card'

console.log(fetchGitHubData())

export default function Home() {
  return (
    <main className="space-y-40">
      <div className="space-y-6">
        <section className="space-y-3">
          <h1 className="text-4xl font-bold">
            Hi, I&apos;m Matheus, a Front-end Developer
            <br /> and Web designer
          </h1>
          <h2 className="text-zinc-400">
            Frontend Developer at{' '}
            <span className="text-zinc-950 underline dark:text-zinc-50">
              Mave Tecnologia
            </span>
          </h2>
        </section>
        <section className="grid grid-cols-2 gap-6">
          <div className="col-span-1 w-full space-y-6">
            <Image
              src={cover}
              alt="Matheus"
              className="w-full rounded-[36px] object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Pizza.shop
              </h3>
              <p className="text-sm text-zinc-400">UX Design, Frontend</p>
            </div>
          </div>
          <div className="col-span-1 w-full space-y-6">
            <Image
              src={cover}
              alt="Matheus"
              className="w-full rounded-[36px] object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Pizza.shop
              </h3>
              <p className="text-sm text-zinc-400">UX Design, Frontend</p>
            </div>
          </div>
        </section>
      </div>

      <section className="space-y-6">
        <h1 className="text-3xl font-semibold">Professional Experience</h1>

        <div className="grid grid-cols-2 gap-16 rounded-[2.25rem] bg-zinc-100 p-16 shadow-2xl shadow-zinc-300 dark:bg-zinc-900 dark:shadow-zinc-800">
          <Card
            src={mave}
            title="Mave Tecnologia"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            date="Frontend Developer | Nov 2023 - July 2024"
            alt=""
          />

          <Card
            src={projectiva}
            title="Projectiva"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            date="Aug 2024 - Present"
            alt=""
          />
        </div>
      </section>

      <section className="space-y-6">
        <h1 className="text-3xl font-semibold">Education</h1>

        <div className="grid grid-cols-3 gap-16 rounded-[2.25rem] bg-zinc-100 p-16 shadow-2xl shadow-zinc-300 dark:bg-zinc-900 dark:shadow-zinc-800">
          <Card
            src={rocketseat}
            title="Rocketseat"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            date="2024 - Present"
            alt=""
          />

          <Card
            src={alura}
            title="Alura"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            date="2023 - 2024"
            alt=""
          />

          <Card
            src={qi}
            title="QI Escola e Faculdade"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            date="2020 - 2022"
            alt=""
          />
        </div>
      </section>
    </main>
  )
}
