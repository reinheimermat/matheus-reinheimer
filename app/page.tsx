'use client'

import { Card } from '@/components/ui/card'
import { useGitHubAutomatedRepos } from 'github-automated-repos'
import mave from '@/assets/imgs/gremio.jpg'
import meneghetti from '@/assets/imgs/meneghetti.jpg'
import projectiva from '@/assets/imgs/projectiva.jpg'
import { CardSkeleton } from '@/components/skeletons/card-skeleton'
import { ArrowUpRight } from 'lucide-react'
import rocketseat from '@/assets/imgs/rocketseat.jpg'
import uniasselvi from '@/assets/imgs/uniasselvi.png'
import qi from '@/assets/imgs/qi.png'
import alura from '@/assets/imgs/alura.jpg'
import * as motion from 'framer-motion/client'

export default function Home() {
  const data = useGitHubAutomatedRepos('reinheimermat', 'deploy')
  const specialRepository = data.find((repo) => repo.name === 'reinheimermat')
  const projectsRepotitories = data.filter(
    (repo) => repo.name !== 'reinheimermat',
  )

  const animation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 1,
    },
  }

  return (
    <motion.div className="space-y-10 md:space-y-20">
      <motion.h1
        initial={animation.initial}
        animate={animation.animate}
        transition={animation.transition}
        className="mx-auto py-9 text-center md:text-2xl lg:text-4xl xl:text-6xl"
      >
        Hi, I&apos;m Matheus, a Frontend Developer, <br />
        crafting system and experiences.
      </motion.h1>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {specialRepository ? (
          <>
            {projectsRepotitories.map((repo) => (
              <Card.Root key={repo.id}>
                <a
                  href="#"
                  className="block space-y-0 overflow-hidden rounded-3xl"
                >
                  <Card.Image
                    src={repo.banner}
                    alt={repo.name}
                    height={360}
                    width={640}
                    className="transition-transform hover:scale-105 hover:transition-transform"
                  />
                </a>
                <Card.Box className="flex items-center justify-between gap-2 space-y-0">
                  <Card.Box className="space-y-0 p-2">
                    <Card.Title>{repo.name}</Card.Title>
                    {repo.description && (
                      <Card.Description>{repo.description}</Card.Description>
                    )}
                  </Card.Box>
                  <Card.ExternalLink href={repo.html_url}>
                    <ArrowUpRight size={24} />
                  </Card.ExternalLink>
                </Card.Box>
              </Card.Root>
            ))}
          </>
        ) : (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <CardSkeleton.Root key={index}>
                <CardSkeleton.Title className="h-[580px] w-full" />
              </CardSkeleton.Root>
            ))}
          </>
        )}
      </section>

      <h2 className="text-2xl font-bold md:text-4xl">Work</h2>

      <Card.Root className="grid grid-cols-1 items-start justify-start gap-14 space-y-0 md:p-10 lg:grid-cols-2 xl:grid-cols-3">
        <Card.Box className="space-y-6">
          <Card.Image
            src={mave}
            alt="Mave Tecnologia picture"
            width={736}
            height={580}
            className="w-full"
          />

          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Mave Tecnologia</Card.Title>
              <Card.Description>
                Frontend Developer, UI/UX Designer
              </Card.Description>
            </Card.Box>

            <Card.Text className="text-sm">
              Developed parts of the frontend and UI/UX from several projects,
              focusing on the Grêmio FBPA team.
            </Card.Text>
          </Card.Box>
        </Card.Box>

        <Card.Box className="space-y-6">
          <Card.Image
            src={projectiva}
            alt="Projectiva picture"
            width={736}
            height={580}
            className="w-full"
          />

          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Projectiva</Card.Title>
              <Card.Description>Frontend Developer</Card.Description>
            </Card.Box>

            <Card.Text className="text-sm">
              I developed modern frontend components implementing technologies
              like Next.JS, TailwindCSS, and Shadcn UI.
            </Card.Text>
          </Card.Box>
        </Card.Box>

        <Card.Box className="space-y-6">
          <Card.Image
            src={meneghetti}
            alt="Refrigeração Meneghetti picture"
            width={1920}
            height={1080}
            className="w-full"
          />

          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Refrigeração Meneghetti</Card.Title>
              <Card.Description>
                Frontend Developer, UI/UX, Freelance
              </Card.Description>
            </Card.Box>

            <Card.Text className="text-sm">
              Developed the frontend and UI/UX for the company&apos;s website,
              focusing on the user experience and the company&apos;s identity.
            </Card.Text>
          </Card.Box>
        </Card.Box>
      </Card.Root>

      <h2 className="text-2xl font-bold md:text-4xl">Education</h2>

      <Card.Root className="grid grid-cols-2 gap-14 space-y-0 md:grid-cols-2 md:p-10 xl:grid-cols-4">
        <Card.Box className="space-y-6">
          <Card.Image
            src={rocketseat}
            alt="Rocketseat code school picture"
            width={460}
            height={300}
            className="max-h-[300px] object-cover"
          />

          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Rocketseat</Card.Title>
              <Card.Description>Code School | 2024 - moment</Card.Description>
            </Card.Box>

            <Card.Text className="text-sm">
              Courses focused on frontend development, UI/UX, and technologies
              like React, Next.JS, and TailwindCSS.
            </Card.Text>
          </Card.Box>
        </Card.Box>
        <Card.Box className="space-y-6">
          <Card.Image
            src={uniasselvi}
            alt="Uniasselvi university picture"
            width={460}
            height={300}
            className="max-h-[300px] object-cover"
          />

          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Uniasselvi</Card.Title>
              <Card.Description>
                University | jan/2024 - moment
              </Card.Description>
            </Card.Box>

            <Card.Text className="text-sm">
              Graduating in Internet Systems, focusing on the development of
              systems and web.
            </Card.Text>
          </Card.Box>
        </Card.Box>
        <Card.Box className="space-y-6">
          <Card.Image
            src={qi}
            alt="Rocketseat code school picture"
            width={460}
            height={300}
            className="max-h-[300px] object-cover"
          />

          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>QI</Card.Title>
              <Card.Description>University | 2020 - 2022</Card.Description>
            </Card.Box>

            <Card.Text className="text-sm">
              IT Technician, focused on the development of systems and web. I
              learned about programming logic, databases, and web development.
            </Card.Text>
          </Card.Box>
        </Card.Box>
        <Card.Box className="space-y-6">
          <Card.Image
            src={alura}
            alt="Rocketseat code school picture"
            width={300}
            height={300}
            className="max-h-[300px] w-full object-fill"
          />

          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Alura</Card.Title>
              <Card.Description>
                Technology School | 2023 - 2024
              </Card.Description>
            </Card.Box>

            <Card.Text className="text-sm">
              Courses focused on frontend development, UI/UX, and technologies
              like React, Next.JS, and TailwindCSS.
            </Card.Text>
          </Card.Box>
        </Card.Box>
      </Card.Root>
    </motion.div>
  )
}
