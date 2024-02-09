import { Button } from "@nextui-org/react";
import Link from "next/link";

type FormButtonGroupProps = {
  href?: string;
  isDisabled: boolean;
};

export function ButtonGroup({ href, isDisabled }: FormButtonGroupProps) {
  return (
    <div className="flex items-center gap-x-2">
      {!!href && (
        <Link href={href}>
          <Button radius="full" type="button" variant="ghost">
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
      >
        Guardar
      </Button>
    </div>
  );
}
