"use client";

import { api } from "@/trpc/react";
import { Controller } from "react-hook-form";

import { Form } from "@/components/form";

import { FormContainer } from "@/components/dashboard/form-container";
import { FormTitle } from "@/components/dashboard/form-title";
import { TipTapEditor } from "@/components/tiptap-editor";
import { useFormMutation } from "@/hooks/useFormMutation";
import { useFormWithToggle } from "@/hooks/useFormWithToggle";
import { outputEditor } from "@/lib/editor-config";
import { Button, ScrollShadow } from "@nextui-org/react";
import { EditorContent, useEditor } from "@tiptap/react";
import { TopicDescription, descriptionFormSchema } from "./schemas";

type DescriptionFormProps = {
  initialData: TopicDescription;
  topicId: string;
};

export function DescriptionForm({
  initialData,
  topicId,
}: DescriptionFormProps) {
  const {
    optimisticData,
    isEditing,
    formMethods,
    setOptimisticData,
    toggleEditing,
  } = useFormWithToggle({
    initialData,
    schema: descriptionFormSchema,
  });

  const {
    formState: { isValid, isSubmitting, errors },
    control,
    handleSubmit,
  } = formMethods;

  const mutation = api.topic.update.useMutation();
  const { isLoading, handleMutation } = useFormMutation({
    mutation,
    onSuccessMessage: "Se ha actualizado la descripción del tema correctamente",
    onErrorMessage: "Error al actualizar la descripción del tema",
    toggleEditing,
  });

  const editor = useEditor({
    content: optimisticData.description,
    ...outputEditor,
  });

  const onSubmit = async (values: TopicDescription) => {
    const description = values.description || "";
    editor?.commands.setContent(description);
    setOptimisticData({ description });
    handleMutation({ description, id: topicId });
  };

  return (
    <FormContainer
      className="col-span-4"
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
                  description={field.value || ""}
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
