"use client";
import { AvatarButton } from "@/components/avatar-button";
import { Icons } from "@/components/icons";
import { NavbarBrand } from "@/components/navbar-brand";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Button,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { User } from "next-auth";
import Link from "next/link";

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
          <Link className="w-full text-lg" href="/inicio">
            Aprender React
          </Link>
        </NavbarMenuItem>
        {!user && (
          <NavbarMenuItem>
            <Link href="/inicio-sesion">
              <Button
                color="primary"
                variant="shadow"
                startContent={<Icons.loginOutline className="h-6 w-6" />}
                radius="full"
              >
                Inicia sesión
              </Button>
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </>
  );
}
