"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Icons } from "@/components/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import NextLink from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">LMS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden  sm:flex">
        <NextLink href="/">
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">LMS</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/dashboard" underline="hover">
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            startContent={<Icons.loginOutline className="h-6 w-6" />}
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            Dahsboard
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
