import { TransitionPage } from "@/components/transition-page";
import { Divider } from "@nextui-org/react";
import { AddTopicForm } from "./_components/add-topic-form";

export default function AdminAddTopicPage() {
  return (
    <TransitionPage>
      <main className="flex h-full flex-col gap-y-6 lg:max-w-2xl">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold">Nombra el tema</h1>
          <p className="text-default-500">
            ¿Cómo quieres nombrar este tema? No te preocupes, puedes modificarlo
            después.
          </p>
        </div>
        <Divider />

        <AddTopicForm />
      </main>
    </TransitionPage>
  );
}
