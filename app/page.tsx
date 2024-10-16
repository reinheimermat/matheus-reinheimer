'use client'

import { Card } from '@/components/ui/card'
import { useGitHubAutomatedRepos } from 'github-automated-repos'
import mave from '@/assets/imgs/gremio.jpg'
import meneghetti from '@/assets/imgs/meneghetti.jpg'
import projectiva from '@/assets/imgs/projectiva.jpg'
import { CardSkeleton } from '@/components/skeletons/card-skeleton'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  const data = useGitHubAutomatedRepos('reinheimermat', 'deploy')
  const specialRepository = data.find((repo) => repo.name === 'reinheimermat')
  const projectsRepotitories = data.filter(
    (repo) => repo.name !== 'reinheimermat',
  )

  return (
    <div className="space-y-20">
      <h1 className="mx-auto max-w-[1200px] py-9 text-center text-6xl">
        Hi, I&apos;m Matheus, a Frontend Developer, crafting system and
        experiences.
      </h1>

      <section className="grid grid-cols-2 gap-6">
        {specialRepository ? (
          <>
            {projectsRepotitories.map((repo) => (
              <Card.Root key={repo.id}>
                <Card.Image
                  src={repo.banner}
                  alt={repo.name}
                  height={360}
                  width={640}
                />
                <Card.Box className="flex items-center justify-between gap-6 space-y-0">
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

      <h2 className="text-4xl font-bold">Work</h2>

      <Card.Root className="grid grid-cols-3 items-start justify-start gap-14 space-y-0 p-10">
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

            <Card.Text>
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

            <Card.Text>
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

            <Card.Text>
              Developed the frontend and UI/UX for the company&apos;s website,
              focusing on the user experience and the company&apos;s identity.
            </Card.Text>
          </Card.Box>
        </Card.Box>
      </Card.Root>

      {/* <section className="mx-auto grid grid-cols-3 gap-16">
        <Card.Root className="col-span-1">
          <Image
            src={mave}
            alt="Astro logo"
            className="card-image w-full rounded-lg"
          />
          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Mave Tecnologia</Card.Title>
              <Card.Description>
                Frontend Developer, UI/UX Designer
              </Card.Description>
            </Card.Box>
            <Card.Text>
              Developed parts of the frontend and UI/UX from several projects,
              focusing on the Grêmio FBPA team.
            </Card.Text>
          </Card.Box>
        </Card.Root>
        <Card.Root className="col-span-1">
          <Image
            src={projectiva}
            alt="Astro logo"
            className="card-image w-full rounded-lg"
          />
          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Projectiva</Card.Title>
              <Card.Description>Frontend Developer </Card.Description>
            </Card.Box>
            <Card.Text>
              I developed modern frontend components implementing technologies
              like Next.JS, TailwindCSS, and Shadcn UI.
            </Card.Text>
          </Card.Box>
        </Card.Root>
        <Card.Root className="col-span-1">
          <Image
            src={meneghetti}
            alt="Astro logo"
            className="card-image w-full rounded-lg"
          />
          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Refrigeração Meneghetti</Card.Title>
              <Card.Description>
                Frontend Developer, UI/UX, Freelance
              </Card.Description>
            </Card.Box>
            <Card.Text>
              Developed the frontend and UI/UX for the company&apos;s website,
              focusing on the user experience and the company&apos;s identity.
            </Card.Text>
          </Card.Box>
        </Card.Root>
      </section> */}
    </div>
  )
}
