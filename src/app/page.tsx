import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <header className="fixed w-screen">
        <Navbar />
      </header>
      <main>
        <section className="bg-secondary pt-[6.25rem]" id="home">
          <article className="container flex flex-col md:py-16">
            <aside className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-pretty">
                Hi, I'm Matheus, a <span className="text-yellow-500">Front-end Developer</span> with focus in React and Next.js.
              </h1>

              <ul className="pt-8 flex gap-4">
                <li>
                  <a href="https://www.linkedin.com/in/reinheimermat/"><LinkedInLogoIcon className="size-5 hover:text-yellow-500"/></a>
                </li>
                <li>
                  <a href="https://github.com/reinheimermat"><GitHubLogoIcon className="size-5 hover:text-yellow-500"/></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/reinheimermat/"><TwitterLogoIcon className="size-5 hover:text-yellow-500"/></a>
                </li>
              </ul>
            </aside>
            <aside className="w-full md:w-1/2 py-8 md:py-0">
              <Image className="mx-auto md:ml-auto" src={Logo} alt="Minha foto sorrindo com um fundo amarelo" width={300} />
            </aside>
          </article>
        </section>
      </main>
    </>
  );
}
