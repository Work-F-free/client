import { SubmitHandler, useForm } from "react-hook-form";
import { TSearchForm, searchShema } from "../shema/shema-search";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form"
import { FilterFields } from "./filter-fields";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";


export const CoworkingSearch = () => {
  const form = useForm<TSearchForm>({
    resolver: zodResolver(searchShema),
    defaultValues: {
      types: '',
      capacity: '1',
      availableAt: new Date(),
      name: ''
    }
  })
  const handlerSubmitForm: SubmitHandler<TSearchForm> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handlerSubmitForm)} className="space-y-4 my-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
          <FilterFields form={form} />
        </div>
        <div className="flex w-full  items-center space-x-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <Input
                  className="focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  type="text"
                  placeholder="Поиск"
                  {...field}
                />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-blue-500 px-16">Найти</Button>
        </div>
      </form>
    </Form>
  );
}; 
