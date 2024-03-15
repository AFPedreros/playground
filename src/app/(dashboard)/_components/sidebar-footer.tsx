"use client";

import { cn } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { SidebarFooterButton } from "./sidebar-footer-button";
import { SidebarLoginSection } from "./sidebar-login-section";

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
      <SidebarFooterButton
        isCompact={isCompact}
        tooltipContent="Mi perfil"
        icon="solar:user-circle-linear"
        iconWidth={24}
        iconClassName="flex-none text-default-500 group-hover:text-foreground"
        compactIconClassName="text-primary"
        buttonClassName={cn(
          "justify-start group truncate data-[hover=true]:bg-primary/20 text-default-500 data-[hover=true]:text-foreground",
          {
            "justify-center": isCompact,
          },
        )}
        color={isCompact ? "primary" : "default"}
        variant={isCompact ? "flat" : "light"}
        radius="full"
      >
        Mi perfil
      </SidebarFooterButton>

      <SidebarFooterButton
        isCompact={isCompact}
        tooltipContent="Cerrar sesión"
        icon="solar:logout-3-linear"
        iconWidth={24}
        iconClassName="flex-none rotate-180 text-default-500 group-hover:text-danger"
        compactIconClassName="text-danger"
        buttonClassName={cn(
          "justify-start group truncate data-[hover=true]:bg-danger/20 text-default-500 data-[hover=true]:text-danger",
          {
            "justify-center": isCompact,
          },
        )}
        color={isCompact ? "danger" : "default"}
        variant={isCompact ? "flat" : "light"}
        radius="full"
        onClick={() => signOut()}
      >
        Cerrar sesión
      </SidebarFooterButton>
    </div>
  );
}
