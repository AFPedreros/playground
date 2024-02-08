import { Icons } from "@/components/icons";
import { Button, Link } from "@nextui-org/react";

export default function AdminAddTopicPage() {
  return (
    <main className="min-h-screen">
      <Button
        href="admin/tema-nuevo"
        as={Link}
        color="primary"
        endContent={<Icons.addOutline className="h-6 w-6" />}
      >
        Nuevo tema
      </Button>
    </main>
  );
}
