import { TransitionPage } from "@/components/transition-page";

export default function ExplorePage() {
  return (
    <TransitionPage>
      <main className="flex h-full flex-col">
        <p>Hola mundo</p>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Explorar</span>
          </h1>
        </div>
      </main>
    </TransitionPage>
  );
}
