"use client";

import { Icon } from "@iconify/react";
import { Button, Tooltip, cn } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

type SidebarFooterProps = {
  isCompact: boolean;
};

export function SidebarFooter({ isCompact }: SidebarFooterProps) {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <div className="flex w-full flex-col gap-0.5 outline-none">
      <Tooltip content="Perfil" isDisabled={!isCompact} placement="right">
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
          variant="light"
          radius="full"
        >
          {isCompact ? (
            <Icon
              className="text-default-500"
              icon="solar:info-circle-line-duotone"
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
                icon="solar:minus-circle-line-duotone"
                width={24}
              />
            )
          }
          variant="light"
          radius="full"
          onClick={() => signOut()}
        >
          {isCompact ? (
            <Icon
              className="rotate-180 text-default-500"
              icon="solar:minus-circle-line-duotone"
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
