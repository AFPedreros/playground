"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <SessionProvider>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
            <Toaster richColors />
          </NextThemesProvider>
        </NextUIProvider>
      </SessionProvider>
    </TRPCReactProvider>
  );
}
