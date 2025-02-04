import { FC, useState } from "react";
import { TPlane, SeatType, TSeat } from "../type/type";
import { usePlane } from "../hooks/usePlan";
import { ImageUploader } from "./form/image-uploader";
import { Canvas } from "./canvas/canvas";
import { Button } from "@/components/ui/button";
import { SeatTypeComp } from "./form/seat-type";

const initialPlan: TPlane = {
  id: "1",
  seats: [],
  background: "",
};

const seatTypes: { type: SeatType; color: string }[] = [
  { type: "workplace", color: "#ef4444" },
  { type: "meeting_room", color: "#22c55e" },
  { type: "conference_room", color: "#0ea5e9" },
];

export const PlanView: FC = () => {
  const { plane, addSeat, updateSeat, savePlanToServer, setPlanBackground } =
    usePlane(initialPlan);

  const [selectedSeat, setSelectedSeat] = useState<TSeat | undefined>();

  const handleCanvasClick = (seat: TSeat) => {
    // Для откртия модалок под бронирвание
    setSelectedSeat(seat);

    console.log(selectedSeat);
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
    const newSeat: TSeat = {
      id: Math.random().toString(),
      type,
      color,
      coord_x: x,
      coord_y: y,
    };
    addSeat(newSeat);
  };

  const handleSeatDragEnd = (seatId: string, x: number, y: number) => {
    updateSeat(seatId, { coord_x: x, coord_y: y });
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h4 className="text-2xl font-medium">Планировка ковворкинга</h4>

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

        <Button className={"w-full md:w-auto"} onClick={savePlanToServer}>
          Сохранить план
        </Button>
      </div>

      <div className="w-full">
        <ImageUploader onImageUpload={handleImageUpload} />
        <Canvas
          background={plane.background}
          seats={plane.seats}
          onSeatClick={handleCanvasClick}
          onSeatDragEnd={handleSeatDragEnd}
          onDrop={handleDrop}
        />
      </div>
    </div>
  );
};
