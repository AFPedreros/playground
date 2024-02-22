import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { useToggle } from "usehooks-ts";
import { ZodSchema } from "zod";

type UseFormWithToggleProps<TFormSchema extends FieldValues> = {
  initialData: TFormSchema;
  schema: ZodSchema<TFormSchema>;
};

export function useFormWithToggle<TFormSchema extends FieldValues>({
  initialData,
  schema,
}: UseFormWithToggleProps<TFormSchema>) {
  const [isEditing, toggleEditing] = useToggle(false);
  const [optimisticData, setOptimisticData] =
    useState<TFormSchema>(initialData);

  const formMethods = useForm<TFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: initialData as DefaultValues<TFormSchema>,
    mode: "onChange",
  });

  return {
    isEditing,
    optimisticData,
    formMethods,
    toggleEditing,
    setOptimisticData,
  };
}
