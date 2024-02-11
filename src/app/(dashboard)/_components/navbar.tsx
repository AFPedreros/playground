"use client";

import { AvatarButton } from "@/components/avatar-button";
import { LoginLinkButton } from "@/components/login-link-button";
import { NavbarBrand } from "@/components/navbar-brand";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { NavbarProps } from "@nextui-org/react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  cn,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AdminLinkButton } from "./admin-link-button";
import { SearchInput } from "./search-input";

export function Navbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const user = session?.user;
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
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand />

      {/* Search */}
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <SearchInput
            size="sm"
            variant="faded"
            radius="full"
            className="bg-transparent"
          />
        </NavbarItem>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          {user?.role === "ADMIN" && <AdminLinkButton />}
        </NavbarItem>
        <NavbarItem className="flex">
          <ThemeSwitcher />
        </NavbarItem>
        {!user && (
          <NavbarItem className="hidden md:flex">
            <LoginLinkButton />
          </NavbarItem>
        )}
        {!!user && (
          <NavbarItem className="flex">
            <AvatarButton />
          </NavbarItem>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
}
