import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card.tsx";
import { Form } from "@/components/ui/form.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { searchShema, TSearchForm } from "../shema/shema-search";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RangeSlider } from "@/components/range-slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Prices {
  priceFrom: number;
  priceTo: number;
}

export const CoworkingSearch = () => {
  const [prices, setPrices] = useState<Prices>({
    priceFrom: 1000,
    priceTo: 3000,
  });
  const [quantity, setQuantity] = useState()

  const updatePrices = useCallback(
    (newValues: number[]) => {
      setPrices({
        priceFrom: newValues[0],
        priceTo: newValues[1],
      });
    },
    [setPrices]
  );

  const searchFrom = useForm<TSearchForm>({
    resolver: zodResolver(searchShema),
    defaultValues: {
   
    },
  });

  const handlerSubmitForm: SubmitHandler<TSearchForm> = (data) => {
    console.log(data);
    console.log("Prices:", prices); // Выводим значения цен при отправке формы
  };

  return (
    <>
      <Card className="p-4">
        <Form {...searchFrom}>
          <div
            className={"flex gap-2"}
          >
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 '>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Input
              type="number"
              placeholder="0"
              min={0}
              max={10000}
              value={quantity}
              onChange={(e) =>
                setQuantity(quantity)
              }
            />

            <Popover>
              <PopoverTrigger>
                <Button variant="outline">
                  от {prices.priceFrom} до {prices.priceTo}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="mt-4">
                  {/* <p className="font-bold mb-3">Цена от и до:</p>
                  <div className="flex gap-3 mb-5">
                    <Input
                      type="number"
                      placeholder="0"
                      min={0}
                      max={10000}
                      value={String(prices.priceFrom)}
                      onChange={(e) =>
                        setPrices({ ...prices, priceFrom: Number(e.target.value) })
                      }
                    />
                    <Input
                      type="number"
                      min={0}
                      max={10000}
                      placeholder="10000"
                      value={String(prices.priceTo)}
                      onChange={(e) =>
                        setPrices({ ...prices, priceTo: Number(e.target.value) })
                      }
                    />
                  </div> */}

                  <RangeSlider
                    min={0}
                    max={10000}
                    step={100}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={updatePrices}
                  />
                </div>
              </PopoverContent>
            </Popover>


          </div>
        </Form>
      </Card>

      <div className="flex justify-end gap-3">
        <Button className={"dark"} type={"submit"} onClick={searchFrom.handleSubmit(handlerSubmitForm)}>
          Показать на карте
        </Button>
        <Button className={"bg-blue-500"} type={"submit"} onClick={searchFrom.handleSubmit(handlerSubmitForm)}>
          Найти
        </Button>
      </div>
    </>
  );
};