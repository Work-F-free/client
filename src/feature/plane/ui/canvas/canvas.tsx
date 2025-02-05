import { FC, useEffect, useRef, useState } from "react";
import { Layer, Stage, Image } from "react-konva";
import Konva from "konva";

import { Seat } from "./seat";
import { SeatType, TMode, TSeat } from "../../type/type";

interface CanvasProps {
  mode: TMode;
  background: string;
  seats: TSeat[];
  onSeatClick: (seat: TSeat) => void;
  onSeatDragEnd: (seatId: string, x: number, y: number) => void;
  onDrop: (x: number, y: number, type: SeatType, color: string) => void;
}

export const Canvas: FC<CanvasProps> = ({
  background,
  seats,
  mode,
  onSeatClick,
  onSeatDragEnd,
  onDrop,
}) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const stageRef = useRef<Konva.Stage | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = background;
    img.onload = () => setImage(img);
  }, [background]);

  return (
    <div
      onDrop={(e) => {
        if (mode) {
          e.preventDefault();
          if (stageRef.current) {
            const pointerPosition = stageRef.current.getPointerPosition();

            if (pointerPosition) {
              const stageContainer = stageRef.current.container();
              const rect = stageContainer.getBoundingClientRect();

              const x = pointerPosition.x + rect.left;
              const y = pointerPosition.y + rect.top;

              const type = e.dataTransfer.getData("type") as SeatType;
              const color = e.dataTransfer.getData("color");

              onDrop(x, y, type, color);
            }
          }
        }
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight * 0.7}
        className="bg-gray-100 border"
      >
        <Layer>
          {image && <Image image={image} />}
          {seats.map((seat) => (
            <Seat
              key={seat.seat_n}
              mode={mode}
              seat={seat}
              onClick={() => onSeatClick(seat)}
              onDragEnd={(x, y) => onSeatDragEnd(seat.seat_n, x, y)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
