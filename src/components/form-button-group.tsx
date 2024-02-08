import { Button, Link } from "@nextui-org/react";

type FormButtonGroupProps = {
  href?: string;
  isDisabled: boolean;
};

export function ButtonGroup({ href, isDisabled }: FormButtonGroupProps) {
  return (
    <div className="flex items-center gap-x-2">
      {!!href && (
        <Button
          href={href}
          as={Link}
          radius="full"
          type="button"
          variant="ghost"
        >
          Cancelar
        </Button>
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
