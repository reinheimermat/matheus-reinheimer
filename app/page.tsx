'use client'

import { Card } from "@/components/ui/card";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import Image from "next/image";
import mave from "@/assets/imgs/gremio.jpg"
import meneghetti from "@/assets/imgs/meneghetti.jpg"
import projectiva from "@/assets/imgs/projectiva.jpg"

export default function Home() {
  const data = useGitHubAutomatedRepos("reinheimermat", "deploy");
  const specialRepository = data.find((repo) => repo.name === "reinheimermat");
  const projectsRepotitories = data.filter((repo) => repo.name !== "reinheimermat");

  return (
    <div className="space-y-20">
      <h1 className="text-6xl text-center max-w-[1200px] mx-auto">
        {specialRepository?.description}
      </h1>

      <section className="grid grid-cols-2 gap-6">
        {projectsRepotitories.map((repo) => (
          <Card.Root key={repo.id}>
            <Image
              src={repo.banner}
              alt={repo.name}
              width={756}
              height={580}
              className="rounded-lg"
            />
          </Card.Root>
        ))}
      </section>

      <h2 className="text-4xl font-bold">Work</h2>

      <section className="grid grid-cols-3 gap-16 mx-auto">
        
        <Card.Root className="col-span-1">
          <Image
            src={mave}
            alt="Astro logo"
            className="card-image rounded-lg w-full"
          />
          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Mave Tecnologia</Card.Title>
              <Card.Description
                >Frontend Developer, UI/UX Designer
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
            className="card-image rounded-lg w-full"
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
            className="card-image rounded-lg w-full"
          />
          <Card.Box>
            <Card.Box className="space-y-0">
              <Card.Title>Refrigeração Meneghetti</Card.Title>
              <Card.Description>
                Frontend Developer, UI/UX, Freelance
              </Card.Description>
            </Card.Box>
            <Card.Text>
              Developed the frontend and UI/UX for the company's website, focusing
              on the user experience and the company's identity.
            </Card.Text>
          </Card.Box>
        </Card.Root>
      </section>
    </div>
  );
}
