import { z } from 'zod'

export const moodSchema = z.enum([
  'happy',
  'sad',
  'angry',
  'fear',
  'anxious',
  'neutral',
])

export const diaryEntrySchema = z.object({
  title: z
    .string()
    .nullable(),

  content: z
    .string()
    .nullable(),

  entry_date: z
    .string()
    .min(
      1,
      'A data é obrigatória',
    ),

  mood: moodSchema.nullable(),
})

export type DiaryEntryFormData = z.infer<
  typeof diaryEntrySchema
>