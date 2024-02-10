import { GitHubLinkButton } from "@/components/github-link-button";
import { LinkButton } from "@/components/link-button";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="container mx-auto h-screen max-w-7xl">
      <section className="relative flex h-full w-screen flex-nowrap items-center justify-center overflow-hidden md:ml-0 md:w-full lg:overflow-visible">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 text-center leading-8 md:px-0">
          <Link href="https://roadmap.sh/react" target="_blank">
            <Chip>Basado en roadmap.sh</Chip>
          </Link>
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Domina <span className="text-primary">React</span> con Animaciones
            Interactivas
          </h1>
          <h2 className="max-w-xl text-pretty leading-tight text-default-500 lg:text-lg">
            Sumérgete en la programación moderna con lecciones dinámicas y
            efectivas. Aprende a tu ritmo y construye proyectos reales con
            React, el framework que está transformando la web.
          </h2>
          <div className="flex gap-4">
            <LinkButton
              href="/tutoriales"
              radius="full"
              variant="shadow"
              color="primary"
            >
              Empieza Ahora
            </LinkButton>

            <GitHubLinkButton />
          </div>
        </div>
      </section>
    </main>
  );
}
