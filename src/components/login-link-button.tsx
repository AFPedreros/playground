"use client";
import { LinkButton } from "@/components/link-button";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";

type LoginLinkButtonProps = {
  fullWidth?: boolean;
};

export function LoginLinkButton({ fullWidth = false }: LoginLinkButtonProps) {
  return (
    <LinkButton
      href="/inicio-sesion"
      className={cn({ "w-full": fullWidth }, "font-medium")}
      color="primary"
      endContent={<Icon icon="solar:alt-arrow-right-linear" />}
      radius="full"
      variant="flat"
    >
      Inicia sesión
    </LinkButton>
  );
}
