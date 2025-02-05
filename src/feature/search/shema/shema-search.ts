import { z } from "zod";

export const searchShema = z.object({
  types: z.string().optional(),
  name: z.string().optional(),
  priceRange: z.tuple([z.number().min(0), z.number().min(0)]).optional(),
  capacity: z.string().optional(),
  availableAt: z.date().optional()
});

export type TSearchForm = z.infer<typeof searchShema>;
