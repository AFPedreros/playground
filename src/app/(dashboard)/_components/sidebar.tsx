"use client";

import { ScrollShadow, Spacer, cn } from "@nextui-org/react";
import { useMediaQuery } from "usehooks-ts";

import { Logo } from "@/components/logo";
import { useCollapsedStore } from "@/store/collapsedStore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SearchInput } from "./search-input";
import { SidebarFooter } from "./sidebar-footer";
import { adminItems, userItems } from "./sidebar-items";
import { SidebarItem, SidebarNav } from "./sidebar-nav";
import { ToggleButton } from "./toggle-button";
import { UserInfo } from "./user-info";

export function Sidebar() {
  const isCollapsed = useCollapsedStore((state) => state.isCollapsed);
  const setIsCollapsed = useCollapsedStore((state) => state.setIsCollapsed);
  const [items, setItems] = useState<SidebarItem[] | []>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  const isCompact = isCollapsed || isMobile;
  const { data: session } = useSession();

  // const items = pathname.startsWith("/admin") ? adminItems : userItems;

  const onToggle = useCallback(() => {
    setIsCollapsed();
  }, [setIsCollapsed]);

  useEffect(() => {
    setItems(pathname.startsWith("/admin") ? adminItems : userItems);

    if (session?.user.role === "ADMIN" && !pathname.startsWith("/admin")) {
      const adminItem = {
        key: "/admin",
        href: "/admin/tutoriales",
        icon: "solar:shield-user-linear",
        title: "Panel Admin",
      };

      setItems((prevItems) => {
        if (prevItems?.length) {
          return [...prevItems, adminItem];
        }
        return [adminItem];
      });
    }
  }, [session, pathname]);

  return (
    <div className="flex h-dvh w-full">
      <div
        className={cn(
          { "w-16 px-2": isCompact },
          { "w-72 px-6": !isCompact },
          "relative flex h-full animate-fade-right flex-col !border-r-small border-divider bg-gradient-to-b from-default-100 via-primary/50 to-default-50 py-6 duration-250 ease-in-out transition-width",
        )}
      >
        <ToggleButton
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          onToggle={onToggle}
        />

        <Link
          href="/"
          className={cn({ "justify-center": isCompact }, "flex items-center")}
        >
          <Logo size={32} />
          <span
            className={cn("ml-2 text-small font-medium", {
              hidden: isCompact,
            })}
          >
            ROADMAP
          </span>
        </Link>

        <Spacer y={8} />

        <div
          className={cn({ "items-center": isCompact }, "flex flex-col gap-4")}
        >
          <UserInfo isCompact={isCompact} />
          <SearchInput
            size="sm"
            variant="flat"
            radius="full"
            isCompact={isCompact}
          />
        </div>

        <Spacer y={8} />

        <ScrollShadow className="h-full max-h-full">
          <SidebarNav
            defaultSelectedKey="home"
            isCompact={isCompact}
            items={items}
          />
        </ScrollShadow>
        <Spacer y={2} />

        <SidebarFooter isCompact={isCompact} />
      </div>
    </div>
  );
}
