import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_CORE_API,
  timeout: 5000,
});

/** ========== ТИПЫ ========== **/

// Коворкинг
export interface Coworking {
  id: string;
  name: string;
  address: string;
  owner: string;
  description: string;
  seats: Seat[];
}

// Ответ при поиске коворкингов
export interface SearchCoworkingResponse {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Coworking[];
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

// Данные для создания/обновления коворкинга
export interface CreateUpdateCoworkingRequest {
  address: string;
  name: string;
  description: string;
  owner: string;
  longitude: number;
  latitude: number;
  seats: CreateSeatRequest[];
}

// Место в коворкинге
export interface Seat {
  id: string;
  type: "WORKPLACE" | "MEETING_ROOM" | "CONFERENCE_ROOM";
  seatNumber: number;
  capacity: number;
  price: number;
  description: string;
  bookings: Booking[];
}

// Данные для создания места
export interface CreateSeatRequest {
  type: "WORKPLACE" | "MEETING_ROOM" | "CONFERENCE_ROOM";
  seatNumber: number;
  capacity: number;
  price: number;
  description: string;
}

// Ответ при создании места
export interface CreateSeatResponse extends CreateSeatRequest {
  id: string;
}

// Бронирование места
export interface Booking {
  from: string;
  to: string;
}

// Данные для бронирования
export interface CreateBookingRequest {
  phoneNumber: string;
  seatNumber: number;
  fromDatetime: string;
  toDatetime: string;
}

// Параметры для поиска
export interface SearchCoworkingParams {
  id?: string;
  name?: string;
  types?: ("WORKPLACE" | "MEETING_ROOM" | "CONFERENCE_ROOM")[];
  priceFrom?: number;
  priceTo?: number;
  capacity?: number;
  availableAt?: string; // формат ISO (YYYY-MM-DDTHH:mm:ssZ)
  page?: number;
  size?: number;
  sort?: string[];
}

/** ========== API-ФУНКЦИИ ========== **/

// Получить коворкинг по ID
export const getCoworking = async (id: string): Promise<Coworking> => {
  const response = await instance.get<Coworking>(`/coworking/${id}`);
  return response.data;
};

// Обновить коворкинг по ID
export const updateCoworking = async (
  id: string,
  data: CreateUpdateCoworkingRequest,
): Promise<void> => {
  await instance.put(`/coworking/${id}`, data);
};

// Найти коворкинги с параметрами (фильтры)
export const searchCoworkings = async (
  params: SearchCoworkingParams,
): Promise<SearchCoworkingResponse> => {
  const response = await instance.get<SearchCoworkingResponse>(`/coworking`, {
    params,
  });
  return response.data;
};

// Создать новый коворкинг
export const createCoworking = async (
  data: CreateUpdateCoworkingRequest,
): Promise<Coworking> => {
  const response = await instance.post<Coworking>(`/coworking`, data);
  return response.data;
};

// Удалить коворкинг по ID
export const deleteCoworking = async (id: string): Promise<void> => {
  await instance.delete(`/coworking/${id}`);
};

// Получить информацию о месте по ID
export const getSeatById = async (id: string): Promise<Seat> => {
  const response = await instance.get<Seat>(`/seat/${id}`);
  return response.data;
};

// Получить бронирование места по ID и дате
export const getSeatBooking = async (
  id: string,
  from: string,
  to: string,
): Promise<Booking[]> => {
  const response = await instance.get<Booking[]>(`/seat/${id}/booking`, {
    params: { from, to },
  });
  return response.data;
};

// Забронировать место
export const bookSeat = async (
  id: string,
  bookingData: CreateBookingRequest,
): Promise<Seat> => {
  const response = await instance.post<Seat>(
    `/seat/${id}/booking`,
    bookingData,
  );
  return response.data;
};
