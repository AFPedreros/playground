import { Logo } from "@/components/logo";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignInForm } from "./_components/sign-in-form";

export default async function SignInPage() {
  const session = await getServerAuthSession();

  if (session) redirect("/tutoriales");
  return (
    <main className="relative flex h-screen w-full">
      <Link
        href="/"
        className="absolute left-2 top-5 flex items-center lg:left-5"
      >
        <Logo />
        <span className="ml-2 text-small font-medium">ROADMAP</span>
      </Link>

      <SignInForm />

      <div
        className="relative hidden w-1/2 flex-col-reverse rounded-medium rounded-br-none rounded-tr-none p-10 shadow-small lg:flex"
        style={{
          backgroundImage:
            "url(https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/white-building.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-end gap-4">
          <p className="w-full text-right text-2xl text-black/60">
            <span className="font-medium">“</span>
            <span className="font-normal italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              augue nec massa volutpat aliquet.
            </span>
            <span className="font-medium">”</span>
          </p>
        </div>
      </div>
    </main>
  );
}
