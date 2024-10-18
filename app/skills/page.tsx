import { Badge } from '@/components/ui/badge'
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiSass,
  SiAstro,
  SiRadixui,
  SiShadcnui,
  SiFramer,
  SiRedux,
  SiVite,
  SiReactrouter,
  SiReactquery,
  SiJest,
  SiVitest,
  SiCypress,
  SiFigma,
  SiNotion,
  SiInsomnia,
  SiYoutubemusic,
  SiDiscord,
  SiGit,
  SiGithub,
  SiEslint,
  SiPrettier,
  SiBiome,
} from 'react-icons/si'

import { RxStitchesLogo } from 'react-icons/rx'
import { VscVscode } from 'react-icons/vsc'
import { TbBrandArc } from 'react-icons/tb'

const frontend = [
  {
    label: 'ReactJS',
    icon: <SiReact className="text-sky-400" />,
  },
  {
    label: 'NextJS',
    icon: (
      <SiNextdotjs className="dar dark:text-whitek:text-white text-black" />
    ),
  },
  {
    label: 'Javascript',
    icon: <SiJavascript className="text-yellow-500" />,
  },
  {
    label: 'Typescript',
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    label: 'HTML5',
    icon: <SiHtml5 className="text-orange-500" />,
  },
  {
    label: 'CSS3',
    icon: <SiCss3 className="text-sky-500" />,
  },
  {
    label: 'TailwindCSS',
    icon: <SiTailwindcss className="text-sky-300" />,
  },
  {
    label: 'Styled Components',
    icon: <SiStyledcomponents className="text-pink-400" />,
  },
  {
    label: 'Sass',
    icon: <SiSass className="text-pink-300" />,
  },
  {
    label: 'Astro',
    icon: <SiAstro className="text-red-500" />,
  },
  {
    label: 'Radix UI',
    icon: <SiRadixui className="text-black dark:text-white" />,
  },
  {
    label: 'Shadcn UI',
    icon: <SiShadcnui className="text-black dark:text-white" />,
  },
  {
    label: 'Framer Motion',
    icon: <SiFramer className="text-violet-500" />,
  },
  {
    label: 'Redux',
    icon: <SiRedux className="text-purple-500" />,
  },
  {
    label: 'Vite',
    icon: <SiVite className="text-purple-500" />,
  },
  {
    label: 'React Router',
    icon: <SiReactrouter className="text-orange-500" />,
  },
  {
    label: 'React Query',
    icon: <SiReactquery className="text-red-400" />,
  },
  {
    label: 'Stitches',
    icon: <RxStitchesLogo className="text-black dark:text-white" />,
  },
]

const testing = [
  {
    label: 'Jest',
    icon: <SiJest className="text-orange-700" />,
  },
  {
    label: 'Vitest',
    icon: <SiVitest className="text-lime-600" />,
  },
  {
    label: 'Cypress',
    icon: <SiCypress className="text-black dark:text-white" />,
  },
]

const versionControl = [
  {
    label: 'Git',
    icon: <SiGit className="text-red-600" />,
  },
  {
    label: 'Git',
    icon: <SiGithub className="text-black dark:text-white" />,
  },
]

const apps = [
  {
    label: 'Figma',
    icon: <SiFigma className="text-black dark:text-white" />,
  },
  {
    label: 'Visual Studio Code',
    icon: <VscVscode className="text-sky-500" />,
  },
  {
    label: 'Notion',
    icon: <SiNotion className="text-black dark:text-white" />,
  },
  {
    label: 'Insomnia',
    icon: <SiInsomnia className="text-violet-700" />,
  },
  {
    label: 'Youtube Music',
    icon: <SiYoutubemusic className="text-red-500" />,
  },
  {
    label: 'Discord',
    icon: <SiDiscord className="text-indigo-400" />,
  },
  {
    label: 'Arc Browser',
    icon: <TbBrandArc className="text-pink-400" />,
  },
]

const plugins = [
  {
    label: 'ESLint',
    icon: <SiEslint className="text-indigo-600" />,
  },
  {
    label: 'Prettier',
    icon: <SiPrettier className="text-orange-500" />,
  },
  {
    label: 'BiomeJS',
    icon: <SiBiome className="text-blue-400" />,
  },
]

export default function Skills() {
  return (
    <main className="space-y-10 py-9">
      <section className="space-y-6 xl:w-1/2">
        <h1 className="text-6xl">My Skills</h1>
        <p className="text-justify">
          Explore the technologies and tools that power my development journey.
          I carefully choose and leverage these tools to create robust,
          efficient, and user-centric solutions.
        </p>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Front-end</h2>

        <div className="grid grid-cols-2 items-center gap-3 md:flex md:flex-wrap">
          {frontend.map((skill) => (
            <Badge key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Testing</h2>

        <div className="grid grid-cols-2 items-center gap-3 md:flex md:flex-wrap">
          {testing.map((skill) => (
            <Badge key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Version control</h2>

        <div className="grid grid-cols-2 items-center gap-3 md:flex md:flex-wrap">
          {versionControl.map((skill) => (
            <Badge key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Plugins</h2>

        <div className="grid grid-cols-2 items-center gap-3 md:flex md:flex-wrap">
          {plugins.map((skill) => (
            <Badge key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Apps</h2>

        <div className="grid grid-cols-2 items-center gap-3 md:flex md:flex-wrap">
          {apps.map((skill) => (
            <Badge key={skill.label} {...skill} />
          ))}
        </div>
      </section>
    </main>
  )
}
