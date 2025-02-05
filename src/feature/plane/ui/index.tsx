import { FC, useState } from "react";

import { Button } from "@/components/ui/button";

import { TPlane, SeatType, TSeat, TMode } from "../type/type";
import { usePlane } from "../hooks/usePlan";
import { ImageUploader } from "./form/image-uploader";
import { Canvas } from "./canvas/canvas";
import { SeatTypeComp } from "./form/seat-type";
import { ModalCanvas } from "./modal/modal-canvas";

const seatTypes: { type: SeatType; color: string }[] = [
  { type: "workplace", color: "#ef4444" },
  { type: "meeting_room", color: "#22c55e" },
  { type: "conference_room", color: "#0ea5e9" },
];

interface PlanViewProps {
  mode: TMode;
  initalPlane: TPlane;
}

export const PlanView: FC<PlanViewProps> = ({ mode, initalPlane }) => {
  const { plane, addSeat, updateSeat, savePlanToServer, setPlanBackground } =
    usePlane(initalPlane);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [selectedSeat, setSelectedSeat] = useState<TSeat | undefined>();

  const handleCanvasClick = (seat: TSeat) => {
    setSelectedSeat(seat);
    setIsOpen(!modalIsOpen);
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const background = e.target?.result as string;
      setPlanBackground(background);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (x: number, y: number, type: SeatType, color: string) => {
    if (mode === "editor") {
      const newSeat: TSeat = {
        seat_n: Math.random().toString(),
        type,
        color,
        coord_x: x,
        coord_y: y,
        capacity: 1,
        price: 0,
      };

      addSeat(newSeat);
    }
  };

  const handleSeatDragEnd = (seat_num: string, x: number, y: number) => {
    if (mode === "editor") {
      updateSeat(seat_num, { coord_x: x, coord_y: y });
    }
  };

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        {mode === "editor" && (
          <>
            <h4 className="text-2xl font-medium">Планировка коворкинга</h4>

            <div className="flex flex-col w-full md:flex-row items-center gap-4">
              <div className="flex flex-col w-full md:flex-row  gap-2">
                {seatTypes.map((seatType) => (
                  <SeatTypeComp
                    key={seatType.type}
                    type={seatType.type}
                    color={seatType.color}
                    onDragStart={() => {}}
                  />
                ))}
              </div>

              <Button
                disabled={plane.background === ""}
                className={"w-full md:w-auto"}
                onClick={savePlanToServer}
              >
                Сохранить план
              </Button>
            </div>
          </>
        )}

        <div className="w-full">
          {mode === "editor" && (
            <ImageUploader onImageUpload={handleImageUpload} />
          )}
          <Canvas
            mode={mode}
            background={plane.background}
            seats={plane.seats}
            onSeatClick={handleCanvasClick}
            onSeatDragEnd={handleSeatDragEnd}
            onDrop={handleDrop}
          />
        </div>
      </div>
      <ModalCanvas
        setPlane={updateSeat}
        isOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        seat={selectedSeat}
        mode={mode}
      />
    </>
  );
};
