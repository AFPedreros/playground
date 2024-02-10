import { Button } from "@nextui-org/react";
import Link from "next/link";

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
        <Link href={href}>
          <Button
            radius="full"
            type="button"
            variant="ghost"
            isLoading={isLoading}
          >
            Cancelar
          </Button>
        </Link>
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
