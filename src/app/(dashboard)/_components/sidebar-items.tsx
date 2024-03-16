import { Chip } from "@nextui-org/react";
import type { SidebarItem } from "./sidebar-nav";

export const userItems: SidebarItem[] = [
  {
    key: "/inicio",
    href: "/inicio",
    icon: "solar:home-2-linear",
    title: "Inicio",
  },
  // {
  //   icon: Icons.telescopeOutline,
  //   name: "Explorar",
  //   path: "/explorar",
  // },
  {
    key: "/tutoriales",
    href: "/tutoriales",
    icon: "solar:play-circle-linear",
    title: "Tutoriales",
    endContent: (
      <Chip size="sm" variant="flat" color="success">
        Nuevo
      </Chip>
    ),
  },
  {
    key: "/temas",
    href: "/temas",
    icon: "solar:notebook-square-linear",
    title: "Temas",
  },
  // {
  //   icon: Icons.routeOutline,
  //   name: "Rutas",
  //   path: "/rutas",
  // },
];

export const adminItems: SidebarItem[] = [
  {
    key: "/admin/tutoriales",
    href: "/admin/tutoriales",
    icon: "solar:play-circle-linear",
    title: "Tutoriales",
  },
  {
    key: "/admin/temas",
    href: "/admin/temas",
    icon: "solar:notebook-square-linear",
    title: "Temas",
  },
  {
    key: "/admin/rutas",
    href: "/admin/rutas",
    icon: "solar:routing-linear",
    title: "Rutas",
  },
  {
    key: "/admin/usuarios",
    href: "/admin/usuarios",
    icon: "solar:users-group-two-rounded-linear",
    title: "Usuarios",
  },
  {
    key: "/inicio",
    href: "/inicio",
    icon: "solar:alt-arrow-left-linear",
    title: "Salir panel admin",
  },
];
