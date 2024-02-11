"use client";

import { ScrollShadow, Spacer, cn } from "@nextui-org/react";
import { useMediaQuery } from "usehooks-ts";

import { useCollapsedStore } from "@/store/collapsedStore";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { adminItems, userItems } from "./sidebar-items";

export function DashboardSidebar() {
  const isCollapsed = useCollapsedStore((state) => state.isCollapsed);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  const isCompact = isCollapsed || isMobile;
  const items = pathname.startsWith("/admin") ? adminItems : userItems;

  return (
    <div className="flex h-dvh w-full">
      <div
        className={cn(
          isCompact ? "w-16 px-2" : "w-72 px-6",
          "relative bg-gradient-to-b from-transparent from-30% to-primary/25 flex h-full flex-col !border-r-small border-divider py-6 duration-250 ease-in-out transition-width ",
        )}
      >
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
