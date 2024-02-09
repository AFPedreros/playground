import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export function LoginLinkButton() {
  return (
    <Link href="/inicio-sesion">
      <Button
        className="font-medium"
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
