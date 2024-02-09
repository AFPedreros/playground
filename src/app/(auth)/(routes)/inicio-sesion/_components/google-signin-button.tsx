"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";

export function GoogleSignInButton() {
  return (
    <Button
      radius="full"
      type="submit"
      startContent={<Icon icon="flat-color-icons:google" width={24} />}
      variant="ghost"
    >
      Continue with Google
    </Button>
  );
}
