import { Icon } from "@/components/icon";
import { LinkButton } from "@/components/link-button";

export default function AdminTutorialPage() {
  return (
    <main className="flex h-full flex-col lg:max-w-2xl">
      <div>
        <LinkButton
          href="/admin/tutorial-nuevo"
          variant="shadow"
          color="primary"
          startContent={
            <Icon icon="solar:add-circle-linear" height={24} width={24} />
          }
        >
          Nuevo tutorial
        </LinkButton>
      </div>
    </main>
  );
}
