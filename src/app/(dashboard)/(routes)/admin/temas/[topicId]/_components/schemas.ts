import { Topic } from "@prisma/client";
import * as z from "zod";

export const nameFormSchema = z.object({
  name: z.string().min(3, "Se necesita un título con más de 3 caracteres"),
});

export const descriptionFormSchema = z.object({
  description: z
    .string()
    .min(50, "Se necesita una descripción con más de 10 caracteres")
    .trim(),
});

export const imageFormSchema = z.object({
  imageUrl: z.string().min(1, "Se necesita una imagen"),
});

export type TopicName = Pick<Topic, "name">;
export type TopicDescription = Pick<Topic, "description">;
export type TopicImageUrl = Pick<Topic, "imageUrl">;
