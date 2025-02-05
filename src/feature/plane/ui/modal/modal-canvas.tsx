import { SetStateAction, Dispatch, FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { TMode, TSeat } from "../../type/type";

interface ModalCanvasProps {
  isOpen: boolean;
  mode: TMode;
  seat?: TSeat;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalCanvas: FC<ModalCanvasProps> = ({
  mode,
  isOpen,
  setIsOpen,
  seat,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {seat?.type} - {seat?.seat_n}
          </DialogTitle>

          <DialogDescription>
            {mode === "editor" ? "Редактирование" : "Бронирвание"}
          </DialogDescription>

          
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
