"use client";
import { Avatar, cn } from "@nextui-org/react";
import { useSession } from "next-auth/react";

type UserInfoProps = {
  isCompact: boolean;
};

export function UserInfo({ isCompact }: UserInfoProps) {
  const { data: session } = useSession();

  const user = session?.user;

  if (!session) return null;

  return (
    <div
      className={cn(
        { "ml-0.5 w-full": !isCompact },
        "inline-flex items-center justify-start gap-2 rounded-small outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus",
      )}
    >
      <Avatar
        className="shrink-0"
        isBordered
        size="md"
        src={user?.image || ""}
      />

      <div
        className={cn("inline-flex flex-col items-start truncate", {
          hidden: isCompact,
        })}
      >
        <span className="truncate text-small text-inherit">
          {user?.name || ""}
        </span>
        <span className="text-tiny text-foreground-400">
          {user?.email || ""}
        </span>
      </div>
    </div>
  );
}
