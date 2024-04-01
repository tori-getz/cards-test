import { z } from 'zod';

export const ValidationSchema = z.object({
  title: z.string({ required_error: 'Введите название' }),
  description: z.string({ required_error: 'Введите описание' }),
});

export type ValidationType = z.infer<typeof ValidationSchema>;
