"use client";

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
};
export function Form({ onSubmit, children, className }: FormProps) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
