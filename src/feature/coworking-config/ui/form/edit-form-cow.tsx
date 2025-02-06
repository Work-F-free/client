import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/title";
import { Form } from "@/components/ui/form";
import { ValidateField } from "@/components/field";
import { AppDispatch } from "@/store";

import { coworkingConfig, TEditCoworkigShema } from "../../shema/shema-config";
import { setFormData } from "@/store/slice/coworking/coworking-slice";

interface EditFormCowProps {
  initalData: TEditCoworkigShema;
}

export const EditFormCow: FC<EditFormCowProps> = ({ initalData }) => {
  const dispatch = useDispatch<AppDispatch>();

  const editCowForm = useForm<TEditCoworkigShema>({
    resolver: zodResolver(coworkingConfig),
    defaultValues: initalData,
  });

  useEffect(() => {
    editCowForm.reset(initalData);
  }, [initalData, editCowForm]);

  const handlerFormSubmit: SubmitHandler<TEditCoworkigShema> = (data) => {
    dispatch(setFormData(data));
    toast.info("Успешно Сохранено");
  };

  return (
    <Form {...editCowForm}>
      <form
        className={"flex flex-col gap-4 w-full border px-6 py-8 rounded-lg "}
        onSubmit={editCowForm.handleSubmit(handlerFormSubmit)}
      >
        <div className="flex w-full items-center justify-between">
          <Title
            text={
              initalData.name_coworking
                ? initalData.name_coworking
                : "Новый коворкинг"
            }
            className="font-medium"
          />
          <Button type="submit">Сохранить</Button>
        </div>

        <ValidateField
          control={editCowForm.control}
          name="name_coworking"
          label="Название ковворкинга"
          type="text"
        />

        <ValidateField
          control={editCowForm.control}
          name="address"
          label="Адресс"
          type="text"
        />

        <ValidateField
          control={editCowForm.control}
          name="description"
          label="Описание"
          multiline
        />
      </form>
    </Form>
  );
};
