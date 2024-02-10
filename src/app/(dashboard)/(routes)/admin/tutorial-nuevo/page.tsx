import { AddTutorialForm } from "./_components/add-tutorial-form";

export default function AdminAddTutorialPage() {
  return (
    <main className="flex h-full flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-bold">Nombre del tutorial</h1>
        <p className="text-default-500">
          ¿Cómo quieres nombrar este tutorial? No te preocupes, puedes
          modificarlo después.
        </p>
      </div>
      <AddTutorialForm />
    </main>
  );
}
