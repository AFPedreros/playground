"use client";

import { Icon } from "@iconify/react";
import { Button, Tooltip, cn } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import SidebarLoginSection from "./sidebar-login-section";

type SidebarFooterProps = {
  isCompact: boolean;
};

export function SidebarFooter({ isCompact }: SidebarFooterProps) {
  const { data: session } = useSession();

  const user = session?.user;

  if (!user) return <SidebarLoginSection isCompact={isCompact} />;

  return (
    <div
      className={cn("flex w-full flex-col gap-0.5 outline-none", {
        "items-center gap-4": isCompact,
      })}
    >
      <Tooltip content="Mi perfil" isDisabled={!isCompact} placement="right">
        <Button
          fullWidth
          className={cn(
            "justify-start group truncate data-[hover=true]:bg-primary/20 text-default-500 data-[hover=true]:text-foreground",
            {
              "justify-center": isCompact,
            },
          )}
          isIconOnly={isCompact}
          startContent={
            isCompact ? null : (
              <Icon
                className="flex-none text-default-500 group-hover:text-foreground"
                icon="solar:user-circle-linear"
                width={24}
              />
            )
          }
          color={isCompact ? "primary" : "default"}
          variant={isCompact ? "flat" : "light"}
          radius="full"
        >
          {isCompact ? (
            <Icon
              className="text-primary"
              icon="solar:user-circle-linear"
              width={24}
            />
          ) : (
            "Mi perfil"
          )}
        </Button>
      </Tooltip>
      <Tooltip
        content="Cerrar sesión"
        isDisabled={!isCompact}
        placement="right"
      >
        <Button
          className={cn(
            "justify-start group truncate data-[hover=true]:bg-danger/20 text-default-500 data-[hover=true]:text-danger",
            {
              "justify-center": isCompact,
            },
          )}
          isIconOnly={isCompact}
          startContent={
            isCompact ? null : (
              <Icon
                className="flex-none rotate-180 text-default-500 group-hover:text-danger"
                icon="solar:logout-3-linear"
                width={24}
              />
            )
          }
          color={isCompact ? "danger" : "default"}
          variant={isCompact ? "flat" : "light"}
          radius="full"
          onClick={() => signOut()}
        >
          {isCompact ? (
            <Icon
              className="text-danger"
              icon="solar:logout-3-linear"
              width={24}
            />
          ) : (
            "Cerrar sesión"
          )}
        </Button>
      </Tooltip>
    </div>
  );
}
