"use client";

import { Icon } from "@iconify/react";
import { Button, Input, Tooltip } from "@nextui-org/react";

type SearchInputProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "bordered" | "flat" | "faded" | "underlined";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  isCompact: boolean;
};

export function SearchInput({
  className,
  size,
  variant,
  radius,
  isCompact,
}: SearchInputProps) {
  return (
    <>
      {!!isCompact && (
        <Tooltip content="Buscar" placement="right">
          <Button
            className="bg-default-400/20 data-[hover=true]:bg-default-500/30"
            isIconOnly
            aria-label="búsqueda"
            radius={radius}
            variant="flat"
          >
            <Icon
              className="text-default-500"
              icon="solar:magnifer-linear"
              width={20}
            />
          </Button>
        </Tooltip>
      )}
      {!isCompact && (
        <Input
          classNames={{
            inputWrapper:
              "bg-default-400/20 data-[hover=true]:bg-default-500/30 group-data-[focus=true]:bg-default-500/20 h-10",
            input:
              "placeholder:text-default-600 group-data-[has-value=true]:text-foreground",
          }}
          fullWidth
          size={size}
          variant={variant}
          radius={radius}
          className={className}
          labelPlacement="outside"
          type="text"
          placeholder="Busca un tema o un tutorial"
          startContent={
            <Icon icon="solar:magnifer-linear" height={18} width={18} />
          }
        />
      )}
    </>
  );
}
