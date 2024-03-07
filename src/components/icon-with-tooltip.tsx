import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";

type IconWithTooltipProps = {
  tooltipContent: string;
  isDisabled: boolean;
  icon: string;
  iconWidth: number;
};

export function IconWithTooltip({
  tooltipContent,
  isDisabled,
  icon,
  iconWidth,
}: IconWithTooltipProps) {
  return (
    <Tooltip content={tooltipContent} isDisabled={isDisabled} placement="right">
      <Button
        fullWidth
        className="group justify-center truncate text-default-500 data-[hover=true]:bg-primary/20 data-[hover=true]:text-foreground"
        isIconOnly
        color="primary"
        variant="flat"
        radius="full"
      >
        <Icon className="text-primary" icon={icon} width={iconWidth} />
      </Button>
    </Tooltip>
  );
}
