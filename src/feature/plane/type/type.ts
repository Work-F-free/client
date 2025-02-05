export type SeatType = "workplace" | "meeting_room" | "conference_room";

export type TSeat = {
  seat_n: string; // TODO ----- Возможно придется пофиксить --------
  type: SeatType;
  color: string;
  coord_x?: number;
  coord_y?: number;
  capasity: number;
  price: number;
};

export type TPlane = {
  id: string; // TODO ----- Возможно придется пофиксить --------
  seats: Array<TSeat>;
  background: string; // link or
};

export type TMode = "editor" | "client";
