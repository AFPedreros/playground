"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/form";

import { TipTapEditor } from "@/components/tiptap-editor";
import { useFormMutation } from "@/hooks/useFormMutation";
import { Button, ScrollShadow } from "@nextui-org/react";
import { Topic } from "@prisma/client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { useToggle } from "usehooks-ts";

const formSchema = z.object({
  description: z
    .string()
    .min(50, "Se necesita una descripción con más de 10 caracteres")
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

  const mutation = api.topic.update.useMutation();
  const { isLoading, handleMutation } = useFormMutation({
    mutation,
    onSuccessMessage: "Se ha actualizado la descripción del tema correctamente",
    onErrorMessage: "Error al actualizar la descripción del tema",
    toggleEditing,
  });

  const {
    formState: { isValid, isSubmitting, errors },
    control,
    handleSubmit,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: optimisticData,
    },
    mode: "onChange",
  });

  const editor = useEditor({
    editable: false,
    content: optimisticData,
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "text-4xl font-bold",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "text-default-500 inline",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc list-inside",
          },
        },
      }),
    ],
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const description = values.description;
    editor?.commands.setContent(description);
    setOptimisticData(description);
    handleMutation({ description, id: topicId });
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
          onClick={() => toggleEditing()}
        />
      </div>
      {!isEditing && !optimisticData && (
        <p className="mt-2 text-default-500">
          Por favor escribe una descripción
        </p>
      )}
      {!isEditing && (
        <ScrollShadow className="mt-2 max-h-80 py-2">
          <EditorContent editor={editor} />
        </ScrollShadow>
      )}
      {!!isEditing && (
        <Form
          className="mt-6 flex w-full flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <TipTapEditor
                  className="min-h-40 w-full rounded-large border-medium px-4 py-2 shadow-sm"
                  isValid={!errors.description}
                  description={field.value}
                  onChange={(newValue) => {
                    field.onChange(newValue);
                  }}
                />
                {!isValid && (
                  <div
                    className="p-1 text-tiny text-danger"
                    data-slot="error-message"
                  >
                    {errors.description?.message}
                  </div>
                )}
              </div>
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
