"use client";

import { Icon } from "@iconify/react";
import { Input } from "@nextui-org/react";

type SearchInputProps = {
  size?: "sm" | "md" | "lg";
  variant?: "bordered" | "flat" | "faded" | "underlined";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
};

export function SearchInput({
  size,
  variant,
  radius,
  className,
}: SearchInputProps) {
  return (
    <Input
      size={size}
      variant={variant}
      radius={radius}
      className={className}
      type="text"
      placeholder="Busca un tema o un tutorial"
      startContent={
        <Icon icon="solar:magnifer-linear" height={24} width={24} />
      }
    />
  );
}
