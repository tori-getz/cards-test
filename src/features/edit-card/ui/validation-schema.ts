import { z } from 'zod';

export const ValidationSchema = z.object({
  title: z.string({ required_error: 'Введите название' }),
  description: z.string({ required_error: 'Введите описание' }),
  size: z.number().min(3).max(12),
});

export type ValidationType = z.infer<typeof ValidationSchema>;
