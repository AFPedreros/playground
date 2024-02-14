"use client";

import { Icon } from "@iconify/react";
import { Button, cn } from "@nextui-org/react";

type ToolbarItemProps = {
  icon?: string;
  pressed: boolean;
  onPressedChange: () => void;
};

export function ToolbarItem({
  icon,
  pressed,
  onPressedChange,
}: ToolbarItemProps) {
  return (
    <Button
      isIconOnly
      aria-label={icon}
      className={cn(pressed && "bg-primary-500 text-primary-foreground")}
      radius="sm"
      size="sm"
      variant="bordered"
      onClick={onPressedChange}
    >
      {icon && (
        <Icon
          className={cn("text-default-400", {
            "text-primary-foreground": pressed,
          })}
          icon={icon}
          width={16}
        />
      )}
    </Button>
  );
}
