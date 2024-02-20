import { TransitionPage } from "@/components/transition-page";
import { Divider } from "@nextui-org/react";
import { AddTutorialForm } from "./_components/add-tutorial-form";

export default function AdminAddTutorialPage() {
  return (
    <TransitionPage>
      <main className="flex h-full flex-col gap-y-6 lg:max-w-2xl">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold">Nombre del tutorial</h1>
          <p className="text-default-500">
            ¿Cómo quieres nombrar este tutorial? No te preocupes, puedes
            modificarlo después.
          </p>
        </div>
        <Divider />

        <AddTutorialForm />
      </main>
    </TransitionPage>
  );
}
