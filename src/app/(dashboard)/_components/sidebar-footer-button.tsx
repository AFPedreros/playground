import { Button, ButtonProps, Tooltip } from "@nextui-org/react";

import { Icon } from "@iconify/react";

type SidebarFooterButtonProps = {
  isCompact: boolean;
  tooltipContent: string;
  icon: string;
  iconWidth: number;
  iconClassName?: string;
  compactIconClassName?: string;
  buttonClassName?: string;
  children: React.ReactNode;
  onClick?: () => void;
} & ButtonProps;

export function SidebarFooterButton({
  isCompact,
  tooltipContent,
  icon,
  iconWidth,
  iconClassName,
  compactIconClassName,
  buttonClassName,
  children,
  onClick,
  ...props
}: SidebarFooterButtonProps) {
  return (
    <Tooltip content={tooltipContent} isDisabled={!isCompact} placement="right">
      <Button
        fullWidth={props.fullWidth}
        className={buttonClassName}
        isIconOnly={isCompact}
        startContent={
          !isCompact && (
            <Icon className={iconClassName} icon={icon} width={iconWidth} />
          )
        }
        color={props.color}
        variant={props.variant}
        radius="full"
        onClick={onClick}
      >
        {isCompact ? (
          <Icon className={compactIconClassName} icon={icon} width={24} />
        ) : (
          children
        )}
      </Button>
    </Tooltip>
  );
}
