"use client";
import { NavbarBrand as NextUINavbarBrand } from "@nextui-org/react";
import Link from "next/link";

type NavbarBrandProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export function NavbarBrand({ children, className, href }: NavbarBrandProps) {
  return (
    <NextUINavbarBrand className={className}>
      <Link href={href}>
        {/* <AcmeLogo /> */}
        {children}
      </Link>
    </NextUINavbarBrand>
  );
}
