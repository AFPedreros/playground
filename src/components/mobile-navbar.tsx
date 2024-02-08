"use client";
import { AvatarButton } from "@/components/avatar-button";
import { Icons } from "@/components/icons";
import { NavbarBrand } from "@/components/navbar-brand";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Button,
  Link,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { User } from "next-auth";

type MobileNavbarProps = {
  user: User | null;
  isMenuOpen: boolean;
};

export function MobileNavbar({ user, isMenuOpen }: MobileNavbarProps) {
  return (
    <>
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand href="/">
          <p className="font-bold text-inherit">Roadmap</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {!!user && (
          <NavbarItem>
            <AvatarButton />
          </NavbarItem>
        )}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="/inicio" size="lg">
            Aprende React
          </Link>
        </NavbarMenuItem>
        {!user && (
          <NavbarMenuItem>
            <Button
              className="text-white"
              as={Link}
              color="primary"
              href="/inicio-sesion"
              variant="shadow"
              startContent={<Icons.loginOutline className="h-6 w-6" />}
              radius="full"
            >
              Inicia sesión
            </Button>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </>
  );
}
