import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form.tsx";
import { Button } from "@/components/ui/button.tsx";
import { registerShema, TRegisterForm } from "../shema/shema-login";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidateField } from "@/components/field";

export const RegisterForm = () => {
  const registerForm = useForm<TRegisterForm>({
    resolver: zodResolver(registerShema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const handlerSubmitForm: SubmitHandler<TRegisterForm> = (data) => {
    console.log(data);
  };

  return (
    <Form {...registerForm}>
      <form
        className={"flex flex-col gap-6 mt-6"}
        onSubmit={registerForm.handleSubmit(handlerSubmitForm)}
      >
        <div className={"flex flex-col gap-2"}>
          <h4 className={"font-medium text-2xl"}>Регистрация</h4>
          <p className={"text-gray-500"}>
            Введите информацию, чтобы создать аккаунт
          </p>
        </div>

        <div className={"flex flex-col gap-4"}>
          <div className="grid w-full grid-cols-2 gap-4">
            <ValidateField
              control={registerForm.control}
              name="firstName"
              label="Имя"
              placeholder=""
              type="text"
            />

            <ValidateField
              control={registerForm.control}
              name="lastName"
              label="Фамилия"
              placeholder=""
              type="text"
            />
          </div>

          <ValidateField
            control={registerForm.control}
            name="email"
            label="Email"
            placeholder="m@example.com"
            type="email"
          />

          <ValidateField
            control={registerForm.control}
            name="password"
            label="Пароь"
            placeholder=""
            type="password"
          />

          <ValidateField
            control={registerForm.control}
            name="password"
            label="Повторите пароль"
            placeholder=""
            type="password"
          />
        </div>

        <Button className={"w-full"} type={"submit"}>
          Регистрация
        </Button>
      </form>
    </Form>
  );
};
