"use client";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Form } from "@/components/form";
import { InputField } from "@/components/input-field";

const formSchema = z.object({
  name: z.string().min(3, "Se necesita un título con más de 3 caracteres"),
});

import { Button } from "@nextui-org/react";
import { Topic } from "@prisma/client";
import { useState } from "react";

type NameFormProps = {
  initialData: Topic;
  topicId: string;
};

export function NameForm({ initialData, topicId }: NameFormProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdatePending, setIsUpdatePending] = useState(false);
  const [optimisticName, setOptimisticName] = useState(initialData.name);

  const { mutate, isLoading } = api.topic.create.useMutation({
    mutationKey: ["create-topic"],
    onSuccess: (data) => {
      toast.success("Tema creado");
      router.push(`/admin/temas/${data.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      reset();
    },
  });
  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    setValue,
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData.name,
    },
    mode: "onChange",
  });

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <div className="w-fit rounded-large bg-background/60 p-6 shadow-small backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
      <div className="flex flex-row items-center justify-between gap-x-4">
        <h4 className="font-medium text-foreground">
          Nombre <span className="text-sm font-light">(requerido)</span>
        </h4>
        <Button
          startContent={
            isEditing ? (
              <Icon icon="solar:close-circle-linear" height={18} width={18} />
            ) : (
              <Icon icon="solar:pen-2-linear" height={18} width={18} />
            )
          }
          size="sm"
          isIconOnly
          isLoading={isLoading}
          onClick={toggleEdit}
        />
      </div>
      {!isEditing && <p className="text-success">{optimisticName}</p>}
      {!!isEditing && (
        <Form
          className="mt-6 flex w-80 flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            control={control}
            name="name"
            onClear={() => setValue("name", "")}
            type="text"
            isInvalid={(!!errors.name && dirtyFields.name) as boolean}
            errorMessage={errors.name?.message}
          />
          <Button color="primary">Guardar</Button>
        </Form>
      )}
    </div>
  );
}
