"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Form } from "@/components/form";
import { InputField } from "@/components/input-field";

import { Button } from "@nextui-org/react";
import { Topic } from "@prisma/client";
import { useState } from "react";
import { useToggle } from "usehooks-ts";

const formSchema = z.object({
  name: z.string().min(3, "Se necesita un título con más de 3 caracteres"),
});

type TopicName = Pick<Topic, "name">;

type NameFormProps = {
  initialData: TopicName;
  topicId: string;
};

export function NameForm({ initialData, topicId }: NameFormProps) {
  const [isEditing, toggleEditing] = useToggle(false);
  const [optimisticName, setOptimisticName] = useState(initialData.name);

  const { mutateAsync, isLoading } = api.topic.update.useMutation();

  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    setValue,
    handleSubmit,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: optimisticName,
    },
    mode: "onChange",
  });

  const toggleEdit = () => {
    toggleEditing();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const name = values.name;
    setOptimisticName(name);
    try {
      await mutateAsync({ name, id: topicId });
    } catch (error) {
      console.log("Error", error);
      toast.error("Error al actualizar el nombre");
    } finally {
      toast.success("Nombre actualizado correctamente");
      toggleEdit();
    }
  };

  return (
    <div className="relative h-fit w-full rounded-large bg-default/15 p-6 shadow-small backdrop-blur-[3px]">
      <div className="flex flex-row items-center justify-between gap-x-4">
        <h4 className="text-lg font-medium text-foreground">
          Nombre{" "}
          <span className="text-sm font-light text-danger">(requerido)</span>
        </h4>
        <Button
          className="absolute right-5 top-5"
          startContent={
            isEditing
              ? !isLoading && (
                  <Icon
                    icon="solar:close-circle-linear"
                    height={18}
                    width={18}
                  />
                )
              : !isLoading && (
                  <Icon icon="solar:pen-2-linear" height={18} width={18} />
                )
          }
          size="sm"
          isIconOnly
          isLoading={isLoading}
          onClick={toggleEdit}
        />
      </div>
      {!isEditing && <p className="mt-2 text-default-500">{optimisticName}</p>}
      {!!isEditing && (
        <Form
          className="mt-6 flex w-full flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            control={control}
            name="name"
            onClear={() => setValue("name", "")}
            type="text"
            isInvalid={(!!errors.name && dirtyFields.name) as boolean}
            errorMessage={errors.name?.message}
            isDisabled={isLoading || isSubmitting}
          />
          <Button
            type="submit"
            color="primary"
            isLoading={isLoading || isSubmitting}
            isDisabled={!isValid || isSubmitting}
          >
            Guardar
          </Button>
        </Form>
      )}
    </div>
  );
}
