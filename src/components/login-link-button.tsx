"use client";
import { Icon } from "@iconify/react";
import { Button, cn } from "@nextui-org/react";
import Link from "next/link";

type LoginLinkButtonProps = {
  fullWidth?: boolean;
};

export function LoginLinkButton({ fullWidth = false }: LoginLinkButtonProps) {
  return (
    <Link href="/inicio-sesion">
      <Button
        className={cn(fullWidth && "w-full", "font-medium")}
        color="primary"
        endContent={<Icon icon="solar:alt-arrow-right-linear" />}
        radius="full"
        variant="flat"
      >
        Inicia sesión
      </Button>
    </Link>
  );
}
