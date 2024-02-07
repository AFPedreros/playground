"use client";

import { Icons } from "@/components/icons";
import { Button, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function AdminButton() {
  const pathname = usePathname();

  const path = pathname?.includes("/admin") ? "/explorar" : "/admin/agregar";

  return (
    <Button
      as={Link}
      color="secondary"
      href={path}
      variant="ghost"
      startContent={<Icons.adminOutline className="h-6 w-6" />}
    >
      Admin
    </Button>
  );
}
