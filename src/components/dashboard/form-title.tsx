type FormTitleProps = {
  title: string;
  isRequired?: boolean;
};

export function FormTitle({ title, isRequired }: FormTitleProps) {
  return (
    <div className="flex flex-row items-center justify-between gap-x-4">
      <h4 className="text-lg font-medium text-foreground">
        {title}{" "}
        {!!isRequired && (
          <span className="text-sm font-light text-danger">(requerido)</span>
        )}
      </h4>
    </div>
  );
}
