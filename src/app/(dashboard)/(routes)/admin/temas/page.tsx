import { Icon } from "@/components/icon";
import { LinkButton } from "@/components/link-button";

export default function AdminTopicPage() {
  return (
    <main className="flex h-full flex-col gap-y-6 lg:max-w-2xl">
      <div>
        <LinkButton
          href="/admin//tema-nuevo"
          variant="shadow"
          color="primary"
          startContent={
            <Icon icon="solar:add-circle-linear" height={24} width={24} />
          }
        >
          Nuevo tema
        </LinkButton>
      </div>
    </main>
  );
}
