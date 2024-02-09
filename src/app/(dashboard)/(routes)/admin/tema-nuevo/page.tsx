import { AddTopicForm } from "./_components/add-topic-form";

export default function AdminAddTopicPage() {
  return (
    <main className="h-full flex flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-bold">Nombra el tema</h1>
        <p className="text-default-500">
          ¿Cómo quieres nombrar este tema? No te preocupes, puedes modificarlo
          después.
        </p>
      </div>
      <AddTopicForm />
    </main>
  );
}
