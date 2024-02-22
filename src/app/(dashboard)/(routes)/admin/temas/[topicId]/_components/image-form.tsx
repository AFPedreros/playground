"use client";

import { api } from "@/trpc/react";
import { Controller } from "react-hook-form";

import { FormContainer } from "@/components/dashboard/form-container";
import { FormTitle } from "@/components/dashboard/form-title";
import { FileUploader } from "@/components/file-uploader";
import { Form } from "@/components/form";
import { useFormMutation } from "@/hooks/useFormMutation";
import { useFormWithToggle } from "@/hooks/useFormWithToggle";
import { useUploadThing } from "@/lib/uploadthing";
import type { FileWithPreview } from "@/types";
import { Button, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { useState } from "react";
import { TopicImageUrl, imageFormSchema } from "./schemas";

type ImageFormProps = {
  initialData: TopicImageUrl;
  topicId: string;
};

export function ImageForm({ initialData, topicId }: ImageFormProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const {
    optimisticData,
    isEditing,
    formMethods,
    setOptimisticData,
    toggleEditing,
  } = useFormWithToggle({
    initialData,
    schema: imageFormSchema,
  });

  const {
    formState: { isValid, isSubmitting },
    control,
    handleSubmit,
  } = formMethods;

  const mutation = api.topic.update.useMutation();
  const { isLoading, handleMutation } = useFormMutation({
    mutation,
    onSuccessMessage: "Se ha actualizado la imagen del tema correctamente",
    onErrorMessage: "Error al actualizar la imagen del tema",
    toggleEditing,
  });

  const { startUpload, isUploading } = useUploadThing("image", {
    onClientUploadComplete: async (data) => {
      if (data[0]) {
        handleMutation({ imageUrl: data[0].url, id: topicId });
      }
    },
  });

  const onSubmit = async (values: TopicImageUrl) => {
    const imageUrl = values.imageUrl;
    const filesToUpload = files.map((fileWithPreview) => fileWithPreview.file);
    startUpload(filesToUpload);
    setOptimisticData({ imageUrl });
  };

  return (
    <FormContainer
      isEditing={isEditing}
      isLoading={isLoading || isUploading}
      toggleEditing={toggleEditing}
    >
      <FormTitle title={"Imagen"} isRequired />
      {!isEditing && !optimisticData && (
        <p className="mt-2 text-default-500">Por favor sube una image</p>
      )}
      {!isEditing && !!optimisticData && (
        <div className="relative mt-2 aspect-video">
          <Image
            className="w-full rounded-large object-cover"
            removeWrapper
            as={NextImage}
            fill
            src={optimisticData.imageUrl || ""}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            alt="Imagen del tema"
            loading="eager"
            isBlurred
          />
        </div>
      )}

      {!!isEditing && (
        <Form
          className="mt-6 flex w-full flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="imageUrl"
            control={control}
            render={({ field }) => (
              <FileUploader
                files={files}
                setFiles={setFiles}
                onChange={(newUrl) => {
                  field.onChange(newUrl);
                }}
              />
            )}
          />
          <Button
            type="submit"
            color="primary"
            isLoading={isLoading || isSubmitting || isUploading}
            isDisabled={
              !isValid ||
              isSubmitting ||
              isUploading ||
              (files[0] && files[0].size > 4 * 1024 * 1024)
            }
          >
            Guardar
          </Button>
        </Form>
      )}
    </FormContainer>
  );
}
