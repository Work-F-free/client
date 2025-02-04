import { z } from "zod";

export const loginShema = z.object({
  login: z.string().email("Введите корректный email"),
  password: z.string().min(8, "Пароль должен содержать не менее 8 символов"),
});

export const registerShema = z
  .object({
    firstName: z.string().min(1, "Имя обязательно для заполнения"),
    lastName: z.string().min(1, "Фамилия обязательна для заполнения"),
    email: z.string().email("Некорректный email"),
    password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
    repeatPassword: z.string().min(8, "Повторите пароль"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Пароли не совпадают",
    path: ["repeatPassword"],
  });

export type TRegisterForm = z.infer<typeof registerShema>;
export type TLoginForm = z.infer<typeof loginShema>;
