import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";

type FormContainerProps = {
  children: React.ReactNode;
  isEditing: boolean;
  isLoading: boolean;
  toggleEditing: () => void;
};

export function FormContainer({
  children,
  isEditing,
  isLoading,
  toggleEditing,
}: FormContainerProps) {
  return (
    <div className="relative col-span-2 h-fit w-full rounded-large bg-default/15 p-6 shadow-small backdrop-blur-[3px]">
      <Button
        className="absolute right-5 top-5"
        startContent={
          isEditing
            ? !isLoading && (
                <Icon icon="solar:close-circle-linear" height={18} width={18} />
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
      {children}
    </div>
  );
}
