"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/form";
import { ButtonGroup } from "@/components/form-button-group";
import { InputField } from "@/components/input-field";

const formSchema = z.object({
  name: z.string().min(3, "Se necesita un título con más de 3 caracteres"),
});

export function AddTopicForm() {
  const router = useRouter();
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
    // try {
    //   const response = await axios.post("/api/topics", values);
    //   router.push(`/admin/temas/${response.data.id}`);
    //   toast.success("Tema creado correctamente.");
    // } catch (error) {
    //   console.error(error);
    //   toast.error("Ocurrió un error al crear el tema.");
    // }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
