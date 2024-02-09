import { Icons } from "@/components/icons";
import { getServerAuthSession } from "@/server/auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignInForm } from "./_components/sign-in-form";

export default async function SignInPage() {
  const session = await getServerAuthSession();

  if (session) redirect("/");
  return (
    <div className="absolute inset-0">
      <div className="mx-auto flex h-full max-w-2xl items-center justify-center">
        <div className="flex flex-col items-start gap-20">
          <Link href={"/"}>
            <Button
              color="default"
              variant="ghost"
              startContent={
                <Icons.circleArrowLeftOutline className="h-6 w-6 shrink-0" />
              }
            >
              Volver
            </Button>
          </Link>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
