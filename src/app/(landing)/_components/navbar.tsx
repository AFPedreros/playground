"use client";

import type { NavbarProps } from "@nextui-org/react";

import { LoginLinkButton } from "@/components/login-link-button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { NavbarBrand } from "@/components/navbar-brand";
import { menuItems } from "@/components/navbar-menu-items";
import { ThemeSwitcher } from "@/components/theme-switcher";

import { AvatarButton } from "@/components/avatar-button";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  cn,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export function Navbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <NextUINavbar
      {...props}
      classNames={{
        base: cn("border-default-100 fixed", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand />

      {/* Navigation */}
      <NavbarContent justify="center">
        {menuItems.map((item, index) => {
          if (item.label === "Inicio" && !session) {
            return null;
          }
          return (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                className="text-sm text-foreground hover:text-primary hover:underline hover:underline-offset-4"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <ThemeSwitcher />
        </NavbarItem>
        {!!session && (
          <NavbarItem className="flex">
            <AvatarButton />
          </NavbarItem>
        )}
        {!session && (
          <NavbarItem className="hidden md:flex">
            <LoginLinkButton />
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <MobileNavbar />
    </NextUINavbar>
  );
}
