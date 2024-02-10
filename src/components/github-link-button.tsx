"use client";

import { LinkButton } from "@/components/link-button";
import { Icon } from "@iconify/react";

export function GitHubLinkButton() {
  return (
    <LinkButton
      startContent={<Icon icon="mdi:github" height={24} width={24} />}
      radius="full"
      variant="ghost"
      href="https://github.com/AFPedreros/lms-project"
      target="_blank"
    >
      Explora el Código
    </LinkButton>
  );
}
