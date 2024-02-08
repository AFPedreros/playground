"use client";

import { AvatarButton } from "@/components/avatar-button";
import { Icons } from "@/components/icons";
import { MobileNavbar } from "@/components/mobile-navbar";
import { NavbarBrand } from "@/components/navbar-brand";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = session?.user;
  return (
    <NextUINavbar
      className="fixed"
      position="static"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <MobileNavbar user={user as User} isMenuOpen={isMenuOpen} />

      <NavbarBrand className="hidden sm:flex" href="/">
        <p className="font-bold text-inherit">Roadmap</p>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/inicio" underline="hover">
            Aprende React
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {!user && (
          <NavbarItem>
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
