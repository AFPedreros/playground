"use client";

import { Icon } from "@iconify/react";
import { Button, VisuallyHidden, cn, useCheckbox } from "@nextui-org/react";
import { useToggle } from "usehooks-ts";

type ToolbarItemProps = {
  icon?: string;
};

export function ToolbarItem({ icon }: ToolbarItemProps) {
  const [isSelected, setIsSelected] = useToggle(false);

  return (
    <Button
      isIconOnly
      aria-label={icon}
      className={cn(isSelected && "bg-primary-500 text-primary-foreground")}
      radius="sm"
      size="sm"
      variant="bordered"
      onClick={setIsSelected}
    >
      {icon && (
        <Icon
          className={cn("text-default-400", {
            "text-primary-foreground": isSelected,
          })}
          icon={icon}
          width={16}
        />
      )}
    </Button>
  );
}
