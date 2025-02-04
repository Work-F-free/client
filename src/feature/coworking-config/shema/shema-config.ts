import { z } from "zod";

export const coworkingConfig = z.object({
  address: z.string().min(1, "Адрес коворкинга обязателньое поле")
});
