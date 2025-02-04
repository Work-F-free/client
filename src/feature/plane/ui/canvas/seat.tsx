import { FC } from "react";
import { TSeat } from "../../type/type";
import { Circle } from "react-konva";

interface SeatProps {
  seat: TSeat;
  onClick: () => void;
  onDragEnd: (x: number, y: number) => void;
}

export const Seat: FC<SeatProps> = ({ seat, onClick, onDragEnd }) => {
  return (
    <Circle
      x={seat.coord_x}
      y={seat.coord_y}
      radius={20}
      fill={seat.color}
      draggable
      onClick={onClick}
      onDragEnd={(e) => onDragEnd(e.target.x(), e.target.y())}
    />
  );
};
