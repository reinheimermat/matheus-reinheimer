import myself from '@/assets/imgs/myself.png'
import Image from 'next/image'

export default function About() {
  return (
    <div className="space-y-20">
      <section className="space-y-28 py-9">
        <article className="flex flex-col gap-28 xl:flex-row">
          <aside className="space-y-6 xl:w-2/3">
            <h1 className="text-6xl">About me</h1>
            <p className="text-justify">
              I recently graduated from the Carnegie Mellon University Master of
              Entertainment Technology program and joined Duolingo as a product
              designer.I am a highly motivated and enthusiastic Product Designer
              with a strong passion for 3D and AR/VR design. I enjoy combining
              my artistic background with my technical skills to create
              innovative and creative solutions. I have experience developing
              visionary concepts, conducting user research, and establishing
              product frameworks through the use of animated and interactive
              prototypes. Possessing a positive attitude and a growth-oriented
              mindset, I am constantly seeking opportunities to expand my
              knowledge and skills as a designer.
            </p>

            <div className="flex gap-11">
              <div className="space-y-2">
                <strong>☕ Personal interests</strong>
                <div>
                  <p>Coffee</p>
                  <p>Hip Hop</p>
                  <p>Automobilism</p>
                  <p>Basketball</p>
                  <p>Finance</p>
                </div>
              </div>
              <div className="space-y-2">
                <strong>📚 Currently Learning</strong>
                <div>
                  <p>UI / UX Design</p>
                  <p>Design Patterns</p>
                  <p>Node JS and Back-end</p>
                  <p>Next JS</p>
                  <p>Figma</p>
                </div>
              </div>
            </div>
          </aside>
          <Image src={myself} alt="Astro logo" className="w-1/4 rounded-lg" />
        </article>
      </section>
    </div>
  )
}
