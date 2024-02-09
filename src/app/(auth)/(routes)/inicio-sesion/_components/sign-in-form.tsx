"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Form } from "@/components/form";
import { Icons } from "@/components/icons";
import { Button, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export function SignInForm() {
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      await signIn("google");
      toast.success("Iniciaste sesión correctamente.");
    } catch (error) {
      toast.error("Ocurrió un error al iniciar sesión.");
      console.log(error);
    }
  };
  return (
    <div className="rounded-larges flex w-full max-w-sm flex-col gap-8">
      <div className="flex flex-col items-start">
        <p className="text-xl font-medium text-primary">Bienvenido de nuevo</p>
        <p className="text-small text-default-500">
          Log in to your account to continue
        </p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icons.google className="h-6 w-6" />}
            radius="full"
            type="submit"
            variant="ghost"
          >
            Continúa con Google
          </Button>
        </div>
      </Form>
      <p className="text-pretty text-xs">
        Creando una cuenta aceptas nuestros{" "}
        <Link className="text-xs" href="#" color="secondary" underline="hover">
          Términos y Condiciones
        </Link>{" "}
        y{" "}
        <Link className="text-xs" href="#" color="secondary" underline="hover">
          Políticas de Privacidad
        </Link>
      </p>
    </div>
  );
}
