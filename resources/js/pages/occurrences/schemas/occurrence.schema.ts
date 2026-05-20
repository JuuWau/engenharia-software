import { z } from "zod";

export const occurrenceSchema = z.object({
  title: z
    .string()
    .min(3, "O título deve ter pelo menos 3 caracteres"),

  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres"),

  occurred_at: z
    .string()
    .min(1, "A data é obrigatória"),

  severity: z.enum([
    "low",
    "medium",
    "high",
  ]),

  images: z
    .array(z.instanceof(File))
    .max(10, "Máximo de 10 imagens")
    .optional(),
});

export type OccurrenceFormData = z.infer<
  typeof occurrenceSchema
>;