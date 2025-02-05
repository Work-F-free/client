import { useState } from "react";
import { Card } from "@/components/ui/card.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TSearchForm, searchShema } from "../shema/shema-search";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/shadcn/utils";
import { RangeSlider } from "@/components/range-slider";

interface PriceProps {
  priceFrom?: number
  priceTo?: number
}

export const CoworkingSearch = () => {
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: 500,
    priceTo: 5000,
  })

  const updatePrices = (prices: number[]) => {
    setPrices({
      priceFrom: prices[0],
      priceTo: prices[1],
    });
    form.setValue('priceRange', [prices[0], prices[1]]);
  };

  const form = useForm<TSearchForm>({
    resolver: zodResolver(searchShema),
    defaultValues: {
      types: '',
      capacity: '1',
      availableAt: new Date()
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

            <FormField
              control={form.control}
              name="types"
              render={({ field }) => (
                <FormItem className="flex flex-col w-[250px]">
                  <FormLabel>Тип рабочего места</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Выберите тип рабочего места" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectGroup>
                        <SelectLabel>Типы помещений</SelectLabel>
                        <SelectItem value="WORKPLACE">Рабочее место</SelectItem>
                        <SelectItem value="MEETING_ROOM">Переговорная</SelectItem>
                        <SelectItem value="CONFERENCE_ROOM">Конференц зал</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Кол-во человек</FormLabel>
                  <Input className="focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    type="number"
                    placeholder="0"
                    min={0}
                    max={1000}
                    {...field}
                    value={field.value ? field.value.toString() : "0"}
                    onChange={field.onChange}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priceRange"
              render={() => (
                <FormItem className="flex flex-col">
                  <FormLabel >Цена</FormLabel>
                  <Popover>
                    <PopoverTrigger className="rounded-md border border-field bg-background px-3 py-2 h-10 text-start">
                      от {prices.priceFrom} до {prices.priceTo}

                    </PopoverTrigger>
                    <PopoverContent className="w-60">
                      <RangeSlider
                        min={0}
                        max={10000}
                        step={100}
                        value={[prices.priceFrom || 0, prices.priceTo || 1000]}
                        onValueChange={updatePrices}
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableAt"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Дата</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal hover:bg-white",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'dd.MM.yyyy')
                          ) : (
                            <span>Выберите дату</span>
                          )}

                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </Card>
          <div className="flex justify-end gap-3">
            <Button className={"dark"}>
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
