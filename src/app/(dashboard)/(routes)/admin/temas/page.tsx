import { Icons } from "@/components/icons";
import { Button, Link } from "@nextui-org/react";

export default function AdminTopicPage() {
  return (
    <main className="flex h-full flex-col">
      <div>
        <Button
          href="./tema-nuevo"
          as={Link}
          color="primary"
          startContent={<Icons.addOutline className="h-6 w-6" />}
        >
          Nuevo tema
        </Button>
      </div>
    </main>
  );
}
