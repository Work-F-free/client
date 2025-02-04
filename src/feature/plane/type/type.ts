export type SeatType = "workplace" | "meeting_room" | "conference_room";

export type TSeat = {
  id: string; // TODO ----- Возможно придется пофиксить --------
  type: SeatType;
  color: string;
  coord_x?: number;
  coord_y?: number;
};

export type TPlane = {
  id: string; // TODO ----- Возможно придется пофиксить --------
  seats: Array<TSeat>;
  background: string; // link or
};
