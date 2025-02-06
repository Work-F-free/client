import { z } from "zod";

export const editShema = z.object({
  capacity: z.coerce.number().min(0, "Данное поле должно быть больше 0"),
  price: z.coerce.number().min(0, "Данное поле должно быть больше 0"),
});

export type TEditShema = z.infer<typeof editShema>;
