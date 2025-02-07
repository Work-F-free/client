import { FC } from "react";
import { SeatType } from "../../type/type";

interface SeatTypeCompProps {
  type: SeatType;
  color: string;
  onDragStart: (type: SeatType, color: string) => void;
}

const TypeWithName = {
  WORKPLACE: "Рабочее место",
  MEETING_ROOM: "Переговорная",
  CONFERENCE_ROOM: "Конференц зал",
};

export const SeatTypeComp: FC<SeatTypeCompProps> = ({
  type,
  color,
  onDragStart,
}) => {
  return (
    <div
      className="flex items-center gap-4 p-2 border rounded bg-white cursor-pointer"
      draggable
      onDragStart={(e) => {
        e.dataTransfer?.setData("type", type);
        e.dataTransfer?.setData("color", color);

        onDragStart(type, color);
      }}
    >
      <div
        className={"w-4 h-4 rounded-full"}
        style={{ background: color }}
      ></div>
      <p>{TypeWithName[type]}</p>
    </div>
  );
};
