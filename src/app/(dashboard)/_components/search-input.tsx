"use client";

import { Icons } from "@/components/icons";
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
      startContent={<Icons.searchOutline className="h-6 w-6" />}
    />
  );
}
