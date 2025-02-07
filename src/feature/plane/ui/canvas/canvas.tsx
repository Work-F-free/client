import { FC, useEffect, useRef, useState } from "react";
import { Layer, Stage, Image } from "react-konva";
import Konva from "konva";

import { Seat } from "./seat";
import { SeatType, TMode, TSeat } from "../../type/type";
import { ArrowBigUp, Command, Mouse } from "lucide-react";

interface CanvasProps {
  mode: TMode;
  background: string;
  seats: TSeat[];
  onSeatClick: (seat: TSeat) => void;
  onSeatMiddleClick: (seatId: number) => void;
  onSeatDragEnd: (seatId: number, x: number, y: number) => void;
  onDrop: (x: number, y: number, type: SeatType, color: string) => void;
}

export const Canvas: FC<CanvasProps> = ({
  background,
  seats,
  mode,
  onSeatClick,
  onSeatDragEnd,
  onDrop,
  onSeatMiddleClick,
}) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const stageRef = useRef<Konva.Stage | null>(null);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [stageSize, setStageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.5,
  });

  const isPanning = useRef(false);
  const lastPanPosition = useRef({ x: 0, y: 0 });
  const lastDistance = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setStageSize({
        width: window.innerWidth,
        height: window.innerHeight * 0.7,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = background;
    img.onload = () => setImage(img);
  }, [background]);

  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    if (!(e.evt.ctrlKey || e.evt.metaKey)) return;

    e.evt.preventDefault();

    if (!stageRef.current) return;

    const stage = stageRef.current;
    const scaleBy = 1.05;

    const oldScale = scale;
    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
    setScale(newScale);

    const newPos = {
      x: -(mousePointTo.x * newScale - pointer.x),
      y: -(mousePointTo.y * newScale - pointer.y),
    };

    setPosition(newPos);
  };

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!e.evt.shiftKey) return;

    isPanning.current = true;
    lastPanPosition.current = { x: e.evt.clientX, y: e.evt.clientY };
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isPanning.current) return;

    const dx = e.evt.clientX - lastPanPosition.current.x;
    const dy = e.evt.clientY - lastPanPosition.current.y;
    lastPanPosition.current = { x: e.evt.clientX, y: e.evt.clientY };

    setPosition((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  };

  const handleMouseUp = () => {
    isPanning.current = false;
  };

  const handleTouchStart = (e: Konva.KonvaEventObject<TouchEvent>) => {
    if (e.evt.touches.length === 1) {
      isPanning.current = true;
      lastPanPosition.current = {
        x: e.evt.touches[0].clientX,
        y: e.evt.touches[0].clientY,
      };
    } else if (e.evt.touches.length === 2) {
      const touch1 = e.evt.touches[0];
      const touch2 = e.evt.touches[1];

      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      lastDistance.current = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const handleTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    if (e.evt.touches.length === 1 && isPanning.current) {
      const dx = e.evt.touches[0].clientX - lastPanPosition.current.x;
      const dy = e.evt.touches[0].clientY - lastPanPosition.current.y;
      lastPanPosition.current = {
        x: e.evt.touches[0].clientX,
        y: e.evt.touches[0].clientY,
      };

      setPosition((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
    } else if (e.evt.touches.length === 2 && lastDistance.current !== null) {
      const touch1 = e.evt.touches[0];
      const touch2 = e.evt.touches[1];

      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      const newDistance = Math.sqrt(dx * dx + dy * dy);

      const scaleBy = 1.02;
      let newScale =
        scale * (newDistance > lastDistance.current ? scaleBy : 1 / scaleBy);
      newScale = Math.max(0.5, Math.min(2, newScale));

      setScale(newScale);
      lastDistance.current = newDistance;
    }
  };

  const handleTouchEnd = () => {
    isPanning.current = false;
    lastDistance.current = null;
  };

  return (
    <div
      className={"relative overflow-hidden"}
      onDrop={(e) => {
        if (mode && stageRef.current) {
          e.preventDefault();
          const stage = stageRef.current;

          const clientX = e.clientX;
          const clientY = e.clientY;

          const stageRect = stage.container().getBoundingClientRect();

          const x = (clientX - stageRect.left) / scale - stage.x() / scale;
          const y = (clientY - stageRect.top) / scale - stage.y() / scale;

          const type = e.dataTransfer.getData("type") as SeatType;
          const color = e.dataTransfer.getData("color");

          onDrop(x, y, type, color);
        }
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="absolute px-4 py-2 z-10 rounded-md top-2 right-2 bg-white shadow hidden md:flex flex-col">
        <p className="font-medium text-sm">Подсказки</p>

        <div className="flex flex-col gap-1 ">
          <span className="flex gap-1 items-center text-xs text-gray-500">
            <Command size={14} /> + <Mouse size={14} /> - Скролл
          </span>

          <span className="flex gap-1 items-center text-xs text-gray-500">
            <ArrowBigUp size={14} /> + <Mouse size={14} /> - Перетаскивание
          </span>
        </div>
      </div>

      <Stage
        ref={stageRef}
        width={stageSize.width}
        height={stageSize.height}
        className="bg-gray-50 rounded border"
        scaleX={scale}
        scaleY={scale}
        x={position.x}
        y={position.y}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Layer>
          {image && <Image image={image} />}
          {seats.map((seat) => (
            <Seat
              key={seat.seat_n}
              mode={mode}
              seat={seat}
              onClick={() => onSeatClick(seat)}
              onMiddleClick={() => onSeatMiddleClick(seat.seat_n)}
              onDragEnd={(x, y) => onSeatDragEnd(seat.seat_n, x, y)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
