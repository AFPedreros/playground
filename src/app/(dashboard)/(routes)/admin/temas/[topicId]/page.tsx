import { Divider } from "@nextui-org/react";

import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
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
    <main className="flex h-full flex-col gap-y-6">
      <div className="space-y-0.5 lg:max-w-2xl">
        <h1 className="text-2xl font-bold">
          Configuración del tema:{" "}
          <span className="text-primary">{topic.name}</span>
        </h1>
        <p className="text-default-500">
          Completa todos los campos {completionText}.
        </p>
      </div>
      <Divider />

      <div className="lg:grid flex flex-col w-full  gap-5">
        <div className="flex flex-col gap-5">
          <NameForm initialData={topic} topicId={topic.id} />
          <NameForm initialData={topic} topicId={topic.id} />
        </div>
        <ImageForm initialData={topic} topicId={topic.id} />
        <DescriptionForm initialData={topic} topicId={topic.id} />
      </div>
    </main>
  );
}
