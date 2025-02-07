import { SetStateAction, Dispatch, FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { TMode, TSeat } from "../../type/type";
import { EditForm } from "../form/edit-from/edit-form";
import { BookingForm } from "../form/booking-form/booking-form";

interface ModalCanvasProps {
  isOpen: boolean;
  mode: TMode;
  seat?: TSeat;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setPlane: (seatId: string, updatedSeat: Partial<TSeat>) => void;
}

export const ModalCanvas: FC<ModalCanvasProps> = ({
  mode,
  isOpen,
  setIsOpen,
  seat,
  setPlane,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {seat?.type} - {seat?.seat_n}
          </DialogTitle>

          <DialogDescription>
            {mode === "editor" ? "Редактирование" : "Бронирование"}
          </DialogDescription>

          {mode === "editor" ? (
            <EditForm setOpen={setIsOpen} setPlane={setPlane} seat={seat} />
          ) : (
            <BookingForm seat={seat?.seat_n} />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
