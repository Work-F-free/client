import { FC } from "react";
import { TSeat, TMode } from "../../type/type";
import { Circle } from "react-konva";

interface SeatProps {
  mode: TMode;
  seat: TSeat;
  onClick: () => void;
  onMiddleClick: () => void;
  onDragEnd: (x: number, y: number) => void;
}

export const Seat: FC<SeatProps> = ({
  seat,
  onClick,
  onDragEnd,
  onMiddleClick,
  mode,
}) => {
  return (
    <Circle
      x={seat.coord_x}
      y={seat.coord_y}
      radius={10}
      fill={seat.color}
      draggable={mode === "editor"}
      onContextMenu={(e) => e.evt.preventDefault()}
      onClick={onClick}
      onMouseDown={(e) => {
        if (e.evt.button) {
          onMiddleClick();
        }
      }}
      onDragEnd={(e) => {
        if (mode === "editor") {
          onDragEnd(e.target.x(), e.target.y());
        }
      }}
    />
  );
};
