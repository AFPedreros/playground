import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex h-dvh w-full">
        <div className="fixed flex h-full w-72 flex-col !border-r-small border-divider p-6 duration-250 ease-in-out transition-width">
          <Sidebar />
        </div>
        <div className="w-full pl-72">
          <div className="w-full flex-1 flex-col p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
