import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ValidateField } from "@/components/field";
import { AppDispatch } from "@/store";

import { coworkingConfig, TEditCoworkigShema } from "../../shema/shema-config";
import { setFormData } from "@/store/slice/coworking/coworking-slice";
import { toast } from "sonner";

export const EditFormCow = () => {
  /*
    defaultValues: {
      Дотянуть дефолтные значения
    }, 
  */
  const dispatch = useDispatch<AppDispatch>();

  const editCowForm = useForm<TEditCoworkigShema>({
    resolver: zodResolver(coworkingConfig),
  });

  const handlerFormSubmit: SubmitHandler<TEditCoworkigShema> = (data) => {
    dispatch(setFormData(data));
    toast.info("Успешно Сохранено");
  };

  return (
    <Form {...editCowForm}>
      <form
        className={"flex flex-col gap-4 w-full"}
        onSubmit={editCowForm.handleSubmit(handlerFormSubmit)}
      >
        <div className="flex flex-row gap-4 w-full">
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
        </div>

        <ValidateField
          control={editCowForm.control}
          name="description"
          label="Описание"
          multiline
        />

        <Button type="submit">Сохранить</Button>
      </form>
    </Form>
  );
};
