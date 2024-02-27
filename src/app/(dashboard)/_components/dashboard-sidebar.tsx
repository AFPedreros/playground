"use client";

import { ScrollShadow, Spacer, cn } from "@nextui-org/react";
import { useMediaQuery } from "usehooks-ts";

import { Logo } from "@/components/logo";
import { useCollapsedStore } from "@/store/collapsedStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { Sidebar } from "./sidebar";
import { adminItems, userItems } from "./sidebar-items";
import { ToggleButton } from "./toggle-button";

export function DashboardSidebar() {
  const isCollapsed = useCollapsedStore((state) => state.isCollapsed);
  const setIsCollapsed = useCollapsedStore((state) => state.setIsCollapsed);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  const isCompact = isCollapsed || isMobile;
  const items = pathname.startsWith("/admin") ? adminItems : userItems;

  const onToggle = useCallback(() => {
    setIsCollapsed();
  }, [setIsCollapsed]);

  return (
    <div className="flex h-dvh w-full">
      <div
        className={cn(
          { "w-16 px-2": isCompact },
          { "w-72 px-6": !isCompact },
          "relative flex h-full animate-fade-right flex-col !border-r-small border-divider bg-gradient-to-b from-default-100 via-primary/50 to-primary py-6 duration-250 ease-in-out transition-width",
        )}
      >
        <ToggleButton
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          onToggle={onToggle}
        />

        <Link href="/" className="flex items-center px-3">
          <Logo />
          <span
            className={cn("ml-2 text-small font-medium", {
              hidden: isCompact,
            })}
          >
            ROADMAP
          </span>
        </Link>

        <Spacer y={8} />

        <ScrollShadow className="h-full max-h-full">
          <Sidebar
            defaultSelectedKey="home"
            isCompact={isCompact}
            items={items}
          />
        </ScrollShadow>
        <Spacer y={2} />
      </div>
    </div>
  );
}
