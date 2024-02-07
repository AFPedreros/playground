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
import { SearchInput } from "./search-input";

export function Navbar() {
  return (
    <NextUINavbar isBordered>
      <NavbarBrand>
        <NextLink href="/">
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">LMS</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <SearchInput
            size="sm"
            variant="bordered"
            radius="full"
            className="bg-transparent"
          />
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
    </NextUINavbar>
  );
}
