"use client";
import { Logo } from "@/components/logo";
import { NavbarBrand as NextUINavbarBrand } from "@nextui-org/react";
import Link from "next/link";

export function NavbarBrand() {
  return (
    <NextUINavbarBrand>
      <Link className="flex items-center" href="/">
        <Logo size={34} />
        <span className="ml-2 text-small font-medium">ROADMAP</span>
      </Link>
    </NextUINavbarBrand>
  );
}
