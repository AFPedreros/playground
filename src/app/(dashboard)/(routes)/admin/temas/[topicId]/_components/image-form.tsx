"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Form } from "@/components/form";
import NextImage from "next/image";

import { FileUploader } from "@/components/file-uploader";
import { Button, Image } from "@nextui-org/react";
import { Topic } from "@prisma/client";
import { useState } from "react";
import { useToggle } from "usehooks-ts";

const formSchema = z.object({
  imageUrl: z.string().min(1, "Se necesita una imagen"),
});

type TopicImageUrl = Pick<Topic, "imageUrl">;

type ImageFormProps = {
  initialData: TopicImageUrl;
  topicId: string;
};

export function ImageForm({ initialData, topicId }: ImageFormProps) {
  const [isEditing, toggleEditing] = useToggle(false);
  const [optimisticData, setOptimisticData] = useState(
    initialData.imageUrl || "",
  );

  const { mutateAsync, isLoading } = api.topic.update.useMutation();

  const {
    formState: { isValid, isSubmitting },
    control,
    handleSubmit,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
    },
    mode: "onChange",
  });

  const toggleEdit = () => {
    toggleEditing();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const imageUrl = values.imageUrl;
    setOptimisticData(imageUrl);
    try {
      await mutateAsync({ imageUrl, id: topicId });
    } catch (error) {
      console.log("Error", error);
      toast.error("Error al actualizar la imagen");
    } finally {
      toast.success("Imagen actualizada correctamente");
      toggleEdit();
    }
  };

  return (
    <div className="relative h-fit w-full rounded-large bg-default/15 p-6 shadow-small backdrop-blur-[3px]">
      <div className="flex flex-row items-center justify-between gap-x-4">
        <h4 className="text-lg font-medium text-foreground">
          Imagen{" "}
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
        <p className="mt-2 text-default-500">Por favor sube una image</p>
      )}
      {!isEditing && !!optimisticData && (
        <div className="relative mt-2 aspect-video">
          <Image
            className="w-full rounded-large object-cover"
            removeWrapper
            as={NextImage}
            fill
            src={optimisticData}
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
                onChange={(newUrl) => {
                  field.onChange(newUrl);
                }}
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
