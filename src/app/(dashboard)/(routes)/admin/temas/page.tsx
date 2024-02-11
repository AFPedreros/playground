import { Icons } from "@/components/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function AdminTopicPage() {
  return (
    <main className="flex h-full flex-col gap-y-6 lg:max-w-2xl">
      <Link href="/admin//tema-nuevo">
        <Button
          variant="shadow"
          color="primary"
          startContent={<Icons.addOutline className="h-6 w-6" />}
        >
          Nuevo tema
        </Button>
      </Link>
    </main>
  );
}
