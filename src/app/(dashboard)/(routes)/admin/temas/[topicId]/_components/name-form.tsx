"use client";

import { api } from "@/trpc/react";
import { Controller } from "react-hook-form";

import { Form } from "@/components/form";

import { FormContainer } from "@/components/dashboard/form-container";
import { FormTitle } from "@/components/dashboard/form-title";
import { useFormMutation } from "@/hooks/useFormMutation";
import { useFormWithToggle } from "@/hooks/useFormWithToggle";
import { Button, Input } from "@nextui-org/react";
import { TopicName, nameFormSchema } from "./schemas";

type NameFormProps = {
  initialData: TopicName;
  topicId: string;
};

export function NameForm({ initialData, topicId }: NameFormProps) {
  const {
    optimisticData,
    isEditing,
    formMethods,
    setOptimisticData,
    toggleEditing,
  } = useFormWithToggle({
    initialData,
    schema: nameFormSchema,
  });

  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    setValue,
    handleSubmit,
  } = formMethods;

  const mutation = api.topic.update.useMutation();
  const { isLoading, handleMutation } = useFormMutation({
    mutation,
    onSuccessMessage: "Se ha actualizado el nombre del tema correctamente",
    onErrorMessage: "Error al actualizar el nombre del tema",
    toggleEditing,
  });

  const onSubmit = async (values: TopicName) => {
    const name = values.name;
    setOptimisticData({ name });
    handleMutation({ name, id: topicId });
  };

  return (
    <FormContainer
      isEditing={isEditing}
      isLoading={isLoading}
      toggleEditing={toggleEditing}
    >
      <FormTitle title={"Nombre"} isRequired />
      {!isEditing && (
        <p className="mt-2 text-default-500">{optimisticData.name}</p>
      )}
      {!!isEditing && (
        <Form
          className="mt-6 flex w-full flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
