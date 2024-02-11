import { Icons } from "@/components/icons";
import { LinkButton } from "@/components/link-button";

export default function AdminTopicPage() {
  return (
    <main className="flex h-full flex-col gap-y-6 lg:max-w-2xl">
      <div>
        <LinkButton
          href="/admin//tema-nuevo"
          variant="shadow"
          color="primary"
          startContent={<Icons.addOutline className="h-6 w-6" />}
        >
          Nuevo tema
        </LinkButton>
      </div>
    </main>
  );
}
