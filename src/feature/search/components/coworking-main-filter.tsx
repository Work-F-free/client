import { Card } from "@/components/ui/card.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { TSearchForm, searchShema } from "../shema/shema-search";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form"
import { FilterFields } from "./filter-fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const CoworkingMainFilter = () => { 
  const navigate = useNavigate();

  const form = useForm<TSearchForm>({
    resolver: zodResolver(searchShema),
    defaultValues: {
      types: '',
      capacity: '1',
      availableAt: new Date(),
    }
  }) 

  const handlerSubmitForm: SubmitHandler<TSearchForm> = (data) => {
    const queryStringData: Record<string, string> = {
      ...data,
      priceRange: data.priceRange ? data.priceRange.join(',') : '',
      availableAt: data.availableAt ? data.availableAt.toISOString() : '',
    };
  
    const queryString = new URLSearchParams(queryStringData).toString();
    navigate(`/list?${queryString}`); 
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handlerSubmitForm)} className="space-y-6">
        <Card className="p-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
          <FilterFields form={form} />
        </Card>
        <div className="flex justify-end gap-3">
          <Button variant={"outline"}>
            Показать на карте
          </Button>
          <Button  type={"submit"} className={"bg-blue-500"}  >
            Найти
          </Button>
        </div>
      </form>
    </Form>
  );
}; 
