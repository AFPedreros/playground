import { Icons } from "@/components/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { AdminButton } from "./admin-button";
import { SearchInput } from "./search-input";

export function Navbar() {
  return (
    <NextUINavbar
      className="fixed"
      position="static"
      maxWidth="full"
      isBordered
    >
      <NavbarBrand>
        <NextLink href="/">
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Roadmap</p>
        </NextLink>
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
        <NavbarItem>
          <AdminButton />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
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
      </NavbarContent>
    </NextUINavbar>
  );
}
