import { getServerAuthSession } from "@/server/auth";

export default async function DashboardHomePage() {
  const session = await getServerAuthSession();

  console.log(session);
  return (
    <main className="flex h-full flex-col">
      <h1 className="container text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        <span className="text-primary">Inicio</span>
      </h1>
    </main>
  );
}
