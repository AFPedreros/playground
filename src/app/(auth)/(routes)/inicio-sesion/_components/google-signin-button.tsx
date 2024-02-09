"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";

type GoogleSignInButtonProps = {
  isLoading: boolean;
};

export function GoogleSignInButton({ isLoading }: GoogleSignInButtonProps) {
  return (
    <Button
      radius="full"
      type="submit"
      startContent={
        !isLoading && <Icon icon="flat-color-icons:google" width={24} />
      }
      variant="ghost"
      isLoading={isLoading}
    >
      Continue with Google
    </Button>
  );
}
