export default function About() {
  return (
    <div className="space-y-20">
      <section className="mt-20 space-y-28">
        <article className="flex gap-28">
          <aside className="w-2/3 space-y-6">
            <h1 className="text-6xl">About me</h1>
            <p>
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
          <aside>
            {/* <Image src="/myself.png" alt="Astro logo" className="w-full rounded-lg" /> */}
          </aside>
        </article>
      </section>

      <h1 className="text-4xl font-bold">Experience</h1>
    </div>
  )
}
