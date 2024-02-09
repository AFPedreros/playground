"use client";

import { Icons } from "@/components/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminButton() {
  const pathname = usePathname();

  const isAdminPath = pathname?.includes("/admin");

  return (
    <Link href={isAdminPath ? "/inicio" : "/admin/temas"}>
      <Button
        color="default"
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
    </Link>
  );
}
