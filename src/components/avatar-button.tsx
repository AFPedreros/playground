"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function AvatarButton() {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src={user?.image || ""}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions & Logout" variant="flat">
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            textValue="Profile"
            variant="light"
            className="h-14 cursor-default gap-2"
          >
            <div className="inline-flex flex-col items-start">
              <span className="text-small text-default-600">
                {user?.name || "John Doe"}
              </span>
              <span className="text-tiny text-default-500">
                {user?.email || "email@ejemplo.com"}
              </span>
            </div>
          </DropdownItem>
          <DropdownItem key="user-profile" color="primary">
            <Link href="/perfil">Perfil</Link>
          </DropdownItem>
          {/* <DropdownItem key="settings" color="primary">
            Configuración
          </DropdownItem> */}
        </DropdownSection>
        <DropdownSection aria-label="Logout">
          <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
            Cerrar sesión
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
