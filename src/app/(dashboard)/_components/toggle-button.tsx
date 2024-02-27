import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";

type ToggleButtonProps = {
  isCollapsed: boolean;
  isMobile: boolean;
  onToggle: () => void;
};

export function ToggleButton({
  isCollapsed,
  isMobile,
  onToggle,
}: ToggleButtonProps) {
  return (
    <>
      {!isMobile && !isCollapsed && (
        <Tooltip content="Esconder sidebar" placement="right">
          <Button
            className="absolute right-1 top-1 z-10"
            isIconOnly
            size="sm"
            variant="light"
            color="default"
            onPress={onToggle}
          >
            <Icon icon="solar:close-circle-linear" height={24} width={24} />
          </Button>
        </Tooltip>
      )}
      {!!isMobile ||
        (!!isCollapsed && (
          <Tooltip content="Abrir sidebar" placement="right">
            <Button
              className="mx-auto mb-8"
              isIconOnly
              size="sm"
              variant="light"
              color="default"
              onPress={onToggle}
            >
              <Icon icon="solar:hamburger-menu-linear" height={24} width={24} />
            </Button>
          </Tooltip>
        ))}
    </>
  );
}
