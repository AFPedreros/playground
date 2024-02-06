import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Button } from "@nextui-org/button";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <Button color="primary">Click me</Button>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl ">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </div>
    </main>
  );
}
