"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
          <Toaster richColors />
        </NextThemesProvider>
      </NextUIProvider>
    </TRPCReactProvider>
  );
}
