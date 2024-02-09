"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export function GitHubLinkButton() {
  return (
    <Link href="https://github.com/AFPedreros/lms-project" target="_blank">
      <Button
        radius="full"
        variant="ghost"
        startContent={<Icon icon="mdi:github" height={24} width={24} />}
      >
        Explora el Código
      </Button>
    </Link>
  );
}
