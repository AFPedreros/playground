"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Form } from "@/components/form";

import { TextareaField } from "@/components/textarea-field";
import { Button, ScrollShadow, divider } from "@nextui-org/react";
import { Topic } from "@prisma/client";
import { useState } from "react";
import { useToggle } from "usehooks-ts";
import { TipTapEditor } from "../../../_components/tiptap-editor";

const formSchema = z.object({
  description: z
    .string()
    .min(3, "Se necesita una descripción con más de 3 caracteres")
    .trim(),
});

type TopicDescription = Pick<Topic, "description">;

type DescriptionFormProps = {
  initialData: TopicDescription;
  topicId: string;
};

export function DescriptionForm({
  initialData,
  topicId,
}: DescriptionFormProps) {
  const [isEditing, toggleEditing] = useToggle(false);
  const [optimisticData, setOptimisticData] = useState(
    initialData.description || "",
  );

  const { mutateAsync, isLoading } = api.topic.update.useMutation();

  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    setValue,
    handleSubmit,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: optimisticData,
    },
    mode: "onChange",
  });

  const toggleEdit = () => {
    toggleEditing();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const description = values.description;
    setOptimisticData(description);
    try {
      await mutateAsync({ description, id: topicId });
    } catch (error) {
      console.log("Error", error);
      toast.error("Error al actualizar el nombre");
    } finally {
      toast.success("Nombre actualizado correctamente");
      toggleEdit();
    }
  };

  return (
    <div className="relative col-span-2 h-fit w-full rounded-large bg-default/15 p-6 shadow-small backdrop-blur-[3px]">
      <div className="flex flex-row items-center justify-between gap-x-4">
        <h4 className="text-lg font-medium text-foreground">
          Descripción{" "}
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
      {!isEditing && !optimisticData && (
        <p className="mt-2 text-default-500">
          Por favor escribe una descripción
        </p>
      )}
      {!isEditing && (
        <ScrollShadow className="mt-2 max-h-60">
          <p>{optimisticData}</p>
        </ScrollShadow>
      )}
      {!!isEditing && (
        <Form
          className="mt-6 flex w-full flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <TextareaField
            control={control}
            name="description"
            onClear={() => setValue("description", "")}
            type="text"
            isInvalid={
              (!!errors.description && dirtyFields.description) as boolean
            }
            errorMessage={errors.description?.message}
            isDisabled={isLoading || isSubmitting}
            minRows={5}
            cacheMeasurements={true}
          /> */}
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TipTapEditor
                className="[&>p]:h-40 w-full [&>p]:overflow-y-auto rounded-large border-medium border-default-200 [&>p]:mx-4 [&>p]:my-2 shadow-sm hover:border-default-400"
                description={field.value}
                onChange={field.onChange}
              />
            )}
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
