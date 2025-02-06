import { Card } from "@/components/ui/card.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { TSearchForm, searchShema } from "../shema/shema-search";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form"
import { FilterFields } from "./filter-fields";
import { zodResolver } from "@hookform/resolvers/zod";


export const CoworkingMainFilter = () => {
  const form = useForm<TSearchForm>({
    resolver: zodResolver(searchShema),
    defaultValues: {
      types: '',
      capacity: '1',
      availableAt: new Date(),
    }
  })
  const handlerSubmitForm: SubmitHandler<TSearchForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlerSubmitForm)} className="space-y-6">
          <Card className="p-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            <FilterFields form={form} />
          </Card>
          <div className="flex justify-end gap-3">
            <Button variant={"outline"}>
              Показать на карте
            </Button>
            <Button type={"submit"} className={"bg-blue-500"}  >
              Найти
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}; 
