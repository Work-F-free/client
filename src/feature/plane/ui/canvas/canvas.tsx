import { FC, useEffect, useRef, useState } from "react";
import { Layer, Stage, Image } from "react-konva";
import Konva from "konva";

import { SeatType, TSeat } from "../../type/type";
import { Seat } from "./seat";

interface CanvasProps {
  background: string;
  seats: TSeat[];
  onSeatClick: (seat: TSeat) => void;
  onSeatDragEnd: (seatId: string, x: number, y: number) => void;
  onDrop: (x: number, y: number, type: SeatType, color: string) => void;
}

export const Canvas: FC<CanvasProps> = ({
  background,
  seats,
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
        // TODO ---- Лютая говняшка переделать

        e.preventDefault();
        if (stageRef.current) {
          // Получаем координаты мыши относительно документа
          const pointerPosition = stageRef.current.getPointerPosition();
          if (pointerPosition) {
            // Получаем положение канваса на странице
            const stageContainer = stageRef.current.container();
            const rect = stageContainer.getBoundingClientRect();

            // Вычисляем координаты относительно канваса
            const x = pointerPosition.x + rect.left;
            const y = pointerPosition.y + rect.top;

            // Получаем тип и цвет из данных перетаскивания
            const type = e.dataTransfer.getData("type") as SeatType;
            const color = e.dataTransfer.getData("color");

            // Вызываем onDrop с правильными координатами
            onDrop(x, y, type, color);
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
              key={seat.id}
              seat={seat}
              onClick={() => onSeatClick(seat)}
              onDragEnd={(x, y) => onSeatDragEnd(seat.id, x, y)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
