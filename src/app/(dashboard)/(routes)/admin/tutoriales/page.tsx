import { Icons } from "@/components/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function AdminTutorialPage() {
  return (
    <main className="flex h-full flex-col lg:max-w-2xl">
      <Link href="/admin/tutorial-nuevo">
        <Button
          variant="shadow"
          color="primary"
          startContent={<Icons.addOutline className="h-6 w-6" />}
        >
          Nuevo tutorial
        </Button>
      </Link>
    </main>
  );
}
