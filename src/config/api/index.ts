import { CoreServiceAPI } from "./CoreServiceAPI";
import { PlanManagerAPI } from "./PlanManagerAPI";

export { CoreServiceAPI, PlanManagerAPI };

import {
  Seat_Plane,
  Plan_Manager,
  ErrorResponse_Manager,
  SuccessResponse_Manager,
} from "./PlanManagerAPI";

import {
  Seat_Core,
  Booking,
  Coworking,
  SearchCoworkingParams,
  CreateUpdateCoworkingRequest,
  CreateSeatRequest,
  CreateBookingRequest,
} from "./CoreServiceAPI";

export type {
  Seat_Core,
  Seat_Plane,
  Plan_Manager,
  SuccessResponse_Manager,
  ErrorResponse_Manager,
  Booking,
  Coworking,
  SearchCoworkingParams,
  CreateUpdateCoworkingRequest,
  CreateBookingRequest,
  CreateSeatRequest,
};
