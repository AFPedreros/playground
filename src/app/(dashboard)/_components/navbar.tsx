"use client";

import { AvatarButton } from "@/components/avatar-button";
import { Icons } from "@/components/icons";
import { NavbarBrand } from "@/components/navbar-brand";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { AdminButton } from "./admin-button";
import { SearchInput } from "./search-input";

export function Navbar() {
  const { data: session } = useSession();

  const user = session?.user;
  return (
    <NextUINavbar
      className="fixed"
      position="static"
      maxWidth="full"
      isBordered
    >
      <NavbarBrand href="/">
        <p className="font-bold text-inherit">Roadmap</p>
      </NavbarBrand>

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

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          {user?.role === "ADMIN" && <AdminButton />}
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {!user && (
          <NavbarItem>
            <Button
              className="text-white"
              as={Link}
              color="primary"
              href="#"
              variant="shadow"
              startContent={<Icons.loginOutline className="h-6 w-6" />}
              radius="full"
            >
              Inicia sesión
            </Button>
          </NavbarItem>
        )}
        {!!user && (
          <NavbarItem>
            <AvatarButton />
          </NavbarItem>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
}
