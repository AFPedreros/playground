"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Form } from "@/components/form";
import { ButtonGroup } from "@/components/form-button-group";
import { Input } from "@nextui-org/react";

const formSchema = z.object({
  name: z.string().min(3, "Se necesita un título con más de 3 caracteres"),
});

export function AddTopicForm() {
  const router = useRouter();
  const { mutateAsync, isLoading } = api.topic.create.useMutation();
  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    setValue,
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const data = await mutateAsync(values);

      router.push(`/admin/temas/${data.id}`);
    } catch (error) {
      console.log("Error", error);
      toast.error("Error al crear el tema");
    } finally {
      toast.success("Tema creado");
      reset();
      router.refresh();
    }
  };

  return (
    <div className="flex-1 rounded-medium border-small border-divider bg-background p-4">
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              isClearable
              onClear={() => setValue("name", "")}
              radius="full"
              variant="bordered"
              type="text"
              labelPlacement="outside"
              isRequired
              isInvalid={!!errors.name && dirtyFields.name}
              errorMessage={errors.name?.message}
              isDisabled={isLoading || isSubmitting}
              {...field}
            />
          )}
        />
        <ButtonGroup
          isLoading={isLoading}
          href="/admin/temas"
          isDisabled={!isValid || isSubmitting}
        />
      </Form>
    </div>
  );
}
