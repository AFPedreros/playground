import { Icon } from "@/components/icon";
import { LinkButton } from "@/components/link-button";
import { db } from "@/server/db";
import Link from "next/link";

export default async function AdminTopicPage() {
  const topics = await db.topic.findMany();
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
      {topics.map((topic) => (
        <Link href={`/admin/temas/${topic.id}`}>{topic.name}</Link>
      ))}
    </main>
  );
}
