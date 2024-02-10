"use client";

import { useCollapsedStore } from "@/store/collapsedStore";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useCallback } from "react";
import { AdminLinkButton } from "./admin-link-button";
import { SearchInput } from "./search-input";

export function DashboardHeader() {
  const isCollapsed = useCollapsedStore((state) => state.isCollapsed);
  const setIsCollapsed = useCollapsedStore((state) => state.setIsCollapsed);
  const { data: session } = useSession();

  const user = session?.user;

  const onToggle = useCallback(() => {
    setIsCollapsed();
  }, [setIsCollapsed]);

  return (
    <div className="mb-6 w-full">
      <header className="flex flex-col gap-y-6 rounded-medium border-small border-divider p-4">
        <div className="flex items-center justify-between">
          <Tooltip
            content={isCollapsed ? "Mostrar sidebar" : "Esconder sidebar"}
            placement="right"
          >
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              color="secondary"
              onPress={onToggle}
            >
              <Icon
                height={24}
                icon="solar:sidebar-minimalistic-outline"
                width={24}
              />
            </Button>
          </Tooltip>

          {user?.role === "ADMIN" && (
            <div className="flex md:hidden">
              <AdminLinkButton />
            </div>
          )}
        </div>
        <SearchInput
          size="sm"
          variant="faded"
          radius="full"
          className="bg-transparent flex md:hidden"
        />
      </header>
    </div>
  );
}
