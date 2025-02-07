import { FC, Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ValidateField } from "@/components/field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { TSeat } from "../../../type/type";
import { editShema, TEditShema } from "./shema/edit-shema";
import { toast } from "sonner";

interface EditFormProps {
  seat?: TSeat;
  setPlane: (seatId: number, updatedSeat: Partial<TSeat>) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const EditForm: FC<EditFormProps> = ({ seat, setPlane, setOpen }) => {
  const editForm = useForm<TEditShema>({
    resolver: zodResolver(editShema),
    defaultValues: {
      capacity: seat?.capacity,
      price: seat?.price,
    },
  });

  const hadlerSubmit: SubmitHandler<TEditShema> = (data) => {
    if (!seat?.seat_n) {
      console.error("seat_n отсутствует!");
      return;
    }

    const newSeat = {
      ...seat,
      capacity: data.capacity,
      price: data.price,
    };

    setPlane(seat.seat_n, newSeat);

    toast.info("Успешно сохранено");

    setOpen(false);
  };

  return (
    <Form {...editForm}>
      <form
        className="flex flex-col gap-6 mt-12"
        onSubmit={editForm.handleSubmit(hadlerSubmit)}
      >
        <div>
          <ValidateField
            control={editForm.control}
            name="capacity"
            label="Количество мест"
            type="int"
          />

          <ValidateField
            control={editForm.control}
            name="price"
            label="Цена"
            type="number"
          />
        </div>

        <Button type="submit">Сохранить</Button>
      </form>
    </Form>
  );
};
