"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button, Input, Link } from "@nextui-org/react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3, "Se necesita un título"),
});

export default function AdminAddTopicPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const { isValid, isSubmitting, dirtyFields } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const response = await axios.post("/api/topics", values);
      router.push(`/admin/temas/${response.data.id}`);
      toast.success("Tema creado correctamente.");
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al crear el tema.");
    }
    form.reset();
  };

  return (
    <main className="min-h-screen flex flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-bold">Nombra el tema</h1>
        <p className="text-foreground/50">
          ¿Cómo quieres nombrar este tema? No te preocupes, puedes modificarlo
          después.
        </p>
      </div>
      <form
        className="max-w-sm flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field }) => (
            <Input
              fullWidth
              isClearable
              onClear={() => form.setValue("name", "")}
              radius="full"
              variant="bordered"
              type="text"
              label="nombre"
              labelPlacement="outside"
              description="Escribe el nombre del tema que se va a explicar en los tutoriales."
              isRequired
              isInvalid={!isValid && dirtyFields.name}
              errorMessage={
                !isValid &&
                dirtyFields.name &&
                "Por favor, escribe un nombre para el tema."
              }
              {...field}
            />
          )}
        />
        <div className="flex items-center gap-x-2">
          <Button href="/admin/temas" as={Link} type="button" variant="ghost">
            Cancelar
          </Button>
          <Button type="submit" isDisabled={!isValid || isSubmitting}>
            Guardar
          </Button>
        </div>
      </form>
    </main>
  );
}
