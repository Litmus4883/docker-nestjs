import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateMotivatorSchema = z.object({
  id: z.number().optional(), // Is optional because of auto-generated.
  name: z.string(),
  weight: z.number().nullable().optional(),
  userId: z.number(),
  typeId: z.number().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullable().optional(),
});

export class CreateMotivatorDto extends createZodDto(CreateMotivatorSchema) {}
