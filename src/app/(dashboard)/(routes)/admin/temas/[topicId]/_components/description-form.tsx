"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/form";

import { FormContainer } from "@/components/dashboard/form-container";
import { FormTitle } from "@/components/dashboard/form-title";
import { TipTapEditor } from "@/components/tiptap-editor";
import { useFormMutation } from "@/hooks/useFormMutation";
import { outputEditor } from "@/lib/editor-config";
import { Button, ScrollShadow } from "@nextui-org/react";
import { Topic } from "@prisma/client";
import { EditorContent, useEditor } from "@tiptap/react";
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
    content: optimisticData,
    ...outputEditor,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const description = values.description;
    editor?.commands.setContent(description);
    setOptimisticData(description);
    handleMutation({ description, id: topicId });
  };

  return (
    <FormContainer
      isEditing={isEditing}
      isLoading={isLoading}
      toggleEditing={toggleEditing}
    >
      <FormTitle title={"Descripción"} isRequired />
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
    </FormContainer>
  );
}
