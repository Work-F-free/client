export type SeatType = "WORKPLACE" | "MEETING_ROOM" | "CONFERENCE_ROOM";

export type TSeat = {
  seat_n: number; // TODO ----- Возможно придется пофиксить --------
  type: SeatType;
  color: string;
  coord_x?: number;
  coord_y?: number;
  capacity: number;
  price: number;
};

export type TPlane = {
  id: string; // TODO ----- Возможно придется пофиксить --------
  seats: Array<TSeat>;
  background: string; // link or
};

export type TMode = "editor" | "client";
