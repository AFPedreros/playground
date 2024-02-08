"use client";

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};
export function Form({ onSubmit, children }: FormProps) {
  return (
    <form className="max-w-sm flex flex-col gap-4" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
