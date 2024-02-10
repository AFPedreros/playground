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
          <div className="w-full relative min-h-[calc(100vh-4rem)] h-full flex-col p-6">
            <div className="absolute bottom-0 opacity-50 -z-20 left-0 right-0 top-0 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]" />
            <div className="absolute bg-background bottom-0 -z-10 left-0 right-0 top-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <DashboardHeader />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
