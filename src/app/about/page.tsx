import Image from 'next/image'

import myself from '@/app/assets/myself-lg.png'

export default function About() {
  return (
    <main>
      <h1 className="mb-2 text-3xl font-semibold">About me</h1>
      <section className="flex justify-between gap-6">
        <div className="text-justify">
          <div className="space-y-3">
            <p>
              I recently graduated from the Carnegie Mellon University Master of
              Entertainment Technology program and joined Duolingo as a product
              designer.
            </p>
            <p>
              I am a highly motivated and enthusiastic Product Designer with a
              strong passion for 3D and AR/VR design. I enjoy combining my
              artistic background with my technical skills to create innovative
              and creative solutions.
            </p>
            <p>
              I have experience developing visionary concepts, conducting user
              research, and establishing product frameworks through the use of
              animated and interactive prototypes. Possessing a positive
              attitude and a growth-oriented mindset, I am constantly seeking
              opportunities to expand my knowledge and skills as a designer.
            </p>
          </div>

          <aside className="mt-6 flex gap-8">
            <div>
              <span className="font-semibold">☕ Personal interests</span>
              <ul className="mt-2 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                <li>Coffee</li>
                <li>Hip Hop</li>
                <li>Automobilism</li>
                <li>Basketball</li>
                <li>Finance</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold">📚 My favorite books</span>
              <ul className="mt-2 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                <li>Essentialism</li>
                <li>Effortless</li>
                <li>Thinking, Fast and Slow</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold">🧠 Techs of expertise</span>
              <ul className="mt-2 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                <li>Next JS</li>
                <li>React JS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Node JS</li>
              </ul>
            </div>
          </aside>
        </div>
        <Image src={myself} alt="" className="w-full" />
      </section>
    </main>
  )
}
