"use client";

import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { adminRoutes, userRoutes } from "./sidebar-routes";

export function Sidebar() {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/admin");
  const routes = isAdminPage ? adminRoutes : userRoutes;

  return (
    <Listbox
      className="p-0"
      items={routes}
      aria-label="Dashboard Sidebar"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      hideSelectedIcon
    >
      {(route) => (
        <ListboxItem
          className={cn(route.path === pathname ? "bg-secondary" : "")}
          key={route.path}
          color={route.path === pathname ? "secondary" : "default"}
          startContent={<route.icon className="h-6 w-6" />}
          href={route.path}
        >
          {route.name}
        </ListboxItem>
      )}
    </Listbox>
  );
}
