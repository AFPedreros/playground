import { GridItem } from "@/app/(dashboard)/_components/grid-item";
import { Icon } from "@/components/icon";
import { LinkButton } from "@/components/link-button";
import { db } from "@/server/db";

export default async function AdminTopicPage() {
  const topics = await db.topic.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <main className="flex h-full flex-col gap-y-6">
      <div className="lg:max-w-2xl">
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
      <div className="grid w-full grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {topics.map((topic) => (
          <GridItem
            id={topic.id}
            name={topic.name}
            description={topic.description || ""}
            imageSrc={topic.imageUrl || ""}
          />
        ))}
      </div>
    </main>
  );
}
