import { z } from "zod";

export const coworkingConfig = z.object({
  name_coworking: z.string().min(1, "Название коворкинга обязательно"),
  address: z.string().min(1, "Адрес коворкинга обязателньое поле"),
  description: z
    .string()
    .min(
      50,
      "Данное поле не должно быть пустым, и символов должно быть больше 100",
    ),
});

export type TEditCoworkigShema = z.infer<typeof coworkingConfig>;
