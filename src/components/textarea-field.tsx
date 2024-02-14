import { Textarea } from "@nextui-org/react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type TextareaProps<T extends FieldValues> = {
  className?: string;
  control: Control<T>;
  name: Path<T>;
  onClear: () => void;
  label?: string;
  type: string;
  description?: string;
  isRequired?: boolean;
  isInvalid: boolean;
  isDisabled?: boolean;
  errorMessage: string | undefined;
  minRows?: number;
  cacheMeasurements?: boolean;
};

export function TextareaField<T extends FieldValues>({
  className,
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
  minRows,
  cacheMeasurements,
}: TextareaProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Textarea
          className={className}
          fullWidth
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
          minRows={minRows}
          cacheMeasurements={cacheMeasurements}
          {...field}
        />
      )}
    />
  );
}
