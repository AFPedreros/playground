import { Icons } from "@/components/icons";

export const userRoutes = [
  {
    icon: Icons.homeOutline,
    name: "Inicio",
    path: "/inicio",
  },
  // {
  //   icon: Icons.telescopeOutline,
  //   name: "Explorar",
  //   path: "/explorar",
  // },
  {
    icon: Icons.bookOutline,
    name: "Temas",
    path: "/temas",
  },
  {
    icon: Icons.videoOutline,
    name: "Tutoriales",
    path: "/tutoriales",
  },
  // {
  //   icon: Icons.routeOutline,
  //   name: "Rutas",
  //   path: "/rutas",
  // },
];

export const adminRoutes = [
  {
    icon: Icons.routeOutline,
    name: "Rutas",
    path: "/admin/rutas",
  },
  {
    icon: Icons.bookOutline,
    name: "Temas",
    path: "/admin/temas",
  },
  {
    icon: Icons.videoOutline,
    name: "Tutoriales",
    path: "/admin/tutoriales",
  },
];
