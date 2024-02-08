import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (session?.user.role !== "ADMIN") redirect("/inicio");
  return <>{children}</>;
}
