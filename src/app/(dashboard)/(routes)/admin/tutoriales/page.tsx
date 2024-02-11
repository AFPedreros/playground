import { Icons } from "@/components/icons";
import { LinkButton } from "@/components/link-button";

export default function AdminTutorialPage() {
  return (
    <main className="flex h-full flex-col lg:max-w-2xl">
      <div>
        <LinkButton
          href="/admin/tutorial-nuevo"
          variant="shadow"
          color="primary"
          startContent={<Icons.addOutline className="h-6 w-6" />}
        >
          Nuevo tutorial
        </LinkButton>
      </div>
    </main>
  );
}
