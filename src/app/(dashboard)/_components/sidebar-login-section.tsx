import { IconWithTooltip } from "@/components/icon-with-tooltip";
import { LoginLinkButton } from "@/components/login-link-button";
import { Link, cn } from "@nextui-org/react";

type SidebarLoginSectionProps = {
  isCompact: boolean;
};

export function SidebarLoginSection({ isCompact }: SidebarLoginSectionProps) {
  return (
    <div
      className={cn("flex w-full flex-col", {
        "items-center": isCompact,
      })}
    >
      {!isCompact && <LoginLinkButton />}
      {isCompact && (
        <Link href="/inicio-sesion">
          <IconWithTooltip
            tooltipContent="Inicia sesión"
            isDisabled={!isCompact}
            icon="solar:login-3-linear"
            iconWidth={20}
          />
        </Link>
      )}
    </div>
  );
}
