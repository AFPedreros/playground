"use client";

import { LinkButton } from "@/components/link-button";
import { Icon } from "@iconify/react";

import { usePathname } from "next/navigation";

export function AdminLinkButton() {
  const pathname = usePathname();

  const isAdminPath = pathname?.includes("/admin");

  return (
    <LinkButton
      href={isAdminPath ? "/inicio" : "/admin/tutoriales"}
      color="default"
      variant="ghost"
      startContent={
        isAdminPath ? (
          <Icon icon="solar:alt-arrow-left-linear" />
        ) : (
          <Icon icon="solar:shield-user-linear" height={24} width={24} />
        )
      }
    >
      {isAdminPath ? "Volver" : "Admin"}
    </LinkButton>
  );
}
