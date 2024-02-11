import { Button } from "@nextui-org/react";
import { LinkButton } from "./link-button";

type FormButtonGroupProps = {
  href?: string;
  isDisabled: boolean;
  isLoading?: boolean;
};

export function ButtonGroup({
  href,
  isDisabled,
  isLoading,
}: FormButtonGroupProps) {
  return (
    <div className="flex items-center gap-x-2">
      {!!href && (
        <LinkButton
          href={href}
          radius="full"
          type="button"
          variant="ghost"
          isLoading={isLoading}
        >
          Cancelar
        </LinkButton>
      )}
      <Button
        radius="full"
        type="submit"
        variant="solid"
        color="primary"
        isDisabled={isDisabled}
        isLoading={isLoading}
      >
        Guardar
      </Button>
    </div>
  );
}
