"use client";

import { useCollapsedStore } from "@/store/collapsedStore";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { useCallback } from "react";

export function DashboardHeader() {
  const setIsCollapsed = useCollapsedStore((state) => state.setIsCollapsed);

  const onToggle = useCallback(() => {
    setIsCollapsed();
  }, [setIsCollapsed]);

  return (
    <div className="mb-6 w-full">
      <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
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
        <h2 className="text-medium font-medium text-default-700">
          Minimiza el sidebar
        </h2>
      </header>
    </div>
  );
}
