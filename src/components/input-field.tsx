import { Input } from "@nextui-org/react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type InputFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  onClear: () => void;
  label?: string;
  type: string;
  description?: string;
  isRequired?: boolean;
  isInvalid: boolean;
  isDisabled?: boolean;
  errorMessage: string | undefined;
};

export function InputField<T extends FieldValues>({
  control,
  name,
  onClear,
  label,
  type,
  description,
  isRequired,
  isInvalid,
  isDisabled,
  errorMessage,
}: InputFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          fullWidth
          isClearable
          onClear={onClear}
          radius="full"
          variant="bordered"
          type={type}
          label={label}
          labelPlacement="outside"
          description={description}
          isRequired={isRequired}
          isInvalid={isInvalid}
          errorMessage={isInvalid && errorMessage}
          isDisabled={isDisabled}
          {...field}
        />
      )}
    />
  );
}
