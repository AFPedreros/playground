"use client";
import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export function UserInfo() {
  const { data: session } = useSession();

  const user = session?.user;
  return (
    <User
      className="justify-start"
      name={user?.email || "John Doe"}
      description={user?.email || "email@ejemplo.com"}
      avatarProps={{
        src: user?.image || "",
      }}
    />
  );
}
