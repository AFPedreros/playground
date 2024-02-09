"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Form } from "@/components/form";
import { ButtonGroup } from "@/components/form-button-group";
import { InputField } from "@/components/input-field";

const formSchema = z.object({
  name: z.string().min(3, "Se necesita un título con más de 3 caracteres"),
});

export function AddTopicForm() {
  const router = useRouter();
  const { mutate, isLoading } = api.topics.create.useMutation({});
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
    console.log(values);
    try {
      // const response = await axios.post("/api/topics", values);
      // router.push(`/admin/temas/${response.data.id}`);
      const response = await mutate(values);
      console.log(response);
      toast.success("Tema creado correctamente.");
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al crear el tema.");
    }
    reset();
  };

  return (
    <Form
      className="max-w-sm flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        control={control}
        name="name"
        onClear={() => setValue("name", "")}
        label="Nombre"
        type="text"
        description="Escribe el nombre del tema"
        isRequired={true}
        isInvalid={(!!errors.name && dirtyFields.name) as boolean}
        errorMessage={errors.name?.message}
      />
      <ButtonGroup href="/admin/temas" isDisabled={!isValid || isSubmitting} />
    </Form>
  );
}
