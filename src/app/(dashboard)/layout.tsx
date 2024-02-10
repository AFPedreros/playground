"use client";

import { useCollapsedStore } from "@/store/collapsedStore";
import { cn } from "@nextui-org/react";
import { DashboardHeader } from "./_components/dashboard-header";
import { DashboardSidebar } from "./_components/dashboard-sidebar";
import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isCollapsed = useCollapsedStore((state) => state.isCollapsed);
  return (
    <div className="">
      <Navbar />
      <div className="flex pt-16 h-dvh w-full">
        <div className="fixed">
          <DashboardSidebar />
        </div>
        <div
          className={cn(
            isCollapsed ? "pl-16" : "md:pl-72",
            "w-full duration-250 pl-16 ease-in-out transition-width h-fit",
          )}
        >
          <div className="w-full h-full flex-col p-6">
            <DashboardHeader />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
