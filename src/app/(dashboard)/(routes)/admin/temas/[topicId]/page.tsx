import { db } from "@/server/db";
import { Divider } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { NameForm } from "./_components/name-form";

export default async function TopicIdPage({
  params,
}: { params: { topicId: string } }) {
  const topic = await db.topic.findUnique({
    where: {
      id: params.topicId,
    },
    include: {
      categories: true,
      subCategories: true,
    },
  });

  if (!topic) redirect("/admin/temas");

  const requiredFields = [topic.name, topic.description, topic.imageUrl];

  const totalFields = requiredFields.length;
  const filledFields = requiredFields.filter((field) => field).length;

  const completionText = `(${filledFields}/${totalFields}) completado`;

  return (
    <main className="flex h-full flex-col gap-y-6 lg:max-w-2xl">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-bold">Configuración del tema</h1>
        <p className="text-default-500">
          Completa todos los campos {completionText}.
        </p>
      </div>
      <Divider />

      <NameForm initialData={topic} topicId={topic.id} />
    </main>
  );
}
