"use client";

import { Icons } from "@/components/icons";
import { Button, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function AdminButton() {
  const pathname = usePathname();

  const isAdminPath = pathname?.includes("/admin");

  return (
    <Button
      as={Link}
      color="default"
      href={isAdminPath ? "/inicio" : "/admin/temas"}
      variant="ghost"
      startContent={
        isAdminPath ? (
          <Icons.circleArrowLeftOutline className="h-6 w-6 shrink-0" />
        ) : (
          <Icons.adminOutline className="h-6 w-6 shrink-0" />
        )
      }
    >
      {isAdminPath ? "Volver" : "Admin"}
    </Button>
  );
}
