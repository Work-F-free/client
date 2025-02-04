import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form.tsx";
import { Button } from "@/components/ui/button.tsx";

import { loginShema, TLoginForm } from "../shema/shema-login.ts";
import { ValidateField } from "@/components/field/valid-field.tsx";

export const LoginForm = () => {
  const loginForm = useForm<TLoginForm>({
    resolver: zodResolver(loginShema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const handlerSubmitForm: SubmitHandler<TLoginForm> = (data) => {
    console.log(data);
  };

  return (
    <Form {...loginForm}>
      <form
        className={"flex flex-col gap-6 mt-6"}
        onSubmit={loginForm.handleSubmit(handlerSubmitForm)}
      >
        <div className={"flex flex-col gap-2"}>
          <h4 className={"font-medium text-2xl"}>Войти</h4>
          <p className={"text-gray-500"}>
            Введите логин, чтобы войти в аккаунт
          </p>
        </div>

        <div className={"flex flex-col gap-4"}>
          <ValidateField
            control={loginForm.control}
            name="login"
            label="Email"
            placeholder="m@example.com"
            type="email"
          />

          <ValidateField
            control={loginForm.control}
            name="password"
            label="Пароль"
            type="password"
          />
        </div>

        <Button className={"w-full"} type={"submit"}>
          Войти
        </Button>
      </form>
    </Form>
  );
};
