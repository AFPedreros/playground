import { GitHubLinkButton } from "@/components/github-link-button";
import { LinkButton } from "@/components/link-button";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="container relative mx-auto max-w-7xl bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none fixed inset-0 flex h-screen items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <section className="relative flex h-full min-h-screen w-full flex-nowrap items-center justify-center overflow-hidden lg:overflow-visible">
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
          <div className="flex flex-col gap-4 sm:flex-row">
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
