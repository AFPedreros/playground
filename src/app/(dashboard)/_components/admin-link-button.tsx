"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminLinkButton() {
  const pathname = usePathname();

  const isAdminPath = pathname?.includes("/admin");

  return (
    <Link href={isAdminPath ? "/inicio" : "/admin/tutoriales"}>
      <Button
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
      </Button>
    </Link>
  );
}
