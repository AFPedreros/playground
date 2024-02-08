import { Icons } from "@/components/icons";
import { Button, Link } from "@nextui-org/react";

export default function AdminTopicPage() {
  return (
    <main className="min-h-screen">
      <Button
        href="./tema-nuevo"
        as={Link}
        color="primary"
        startContent={<Icons.addOutline className="h-6 w-6" />}
      >
        Nuevo tema
      </Button>
    </main>
  );
}
