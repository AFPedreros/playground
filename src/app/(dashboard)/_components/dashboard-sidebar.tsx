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
          "relative flex h-full flex-col !border-r-small border-divider py-6 duration-250 ease-in-out transition-width",
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
      {/* <div className="w-full flex-1 flex-col p-4">
        <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            color="secondary"
            onPress={onToggle}
          >
            <Icon
              //   className="text-default-500"
              height={24}
              icon="solar:sidebar-minimalistic-outline"
              width={24}
            />
          </Button>
          <h2 className="text-medium font-medium text-default-700">Overview</h2>
        </header>
        <main className="mt-4 h-full w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-divider" />
        </main>
      </div> */}
    </div>
  );
}
