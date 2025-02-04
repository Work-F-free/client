import { useDispatch, useSelector } from "react-redux";

import { AppState, toggleAuthModalOpen } from "@/store";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs.tsx";

import { LoginForm } from "./login-form.tsx";
import { RegisterForm } from "./register-form.tsx";

export const ModalAuth = () => {
  const dispatch = useDispatch();
  const isAuthModalOpen = useSelector(
    (state: AppState) => state.ui.authModalOpen,
  );

  return (
    <Dialog
      open={isAuthModalOpen}
      onOpenChange={() => dispatch(toggleAuthModalOpen())}
    >
      <DialogContent>
        <DialogHeader className={"hidden"}>
          <DialogTitle>Форма регистрации / авторизации</DialogTitle>
          <DialogDescription>
            Здесь можно зарегистрироваться или войти
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue={"login"} className={"my-4"}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value={"login"}>Войти</TabsTrigger>
            <TabsTrigger value={"register"}>Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value={"login"}>
            <LoginForm />
          </TabsContent>

          <TabsContent value={"register"}>
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
