import axios from "axios";

export interface Seat_Core {
  id: string;
  type: "WORKPLACE" | "MEETING_ROOM" | "CONFERENCE_ROOM";
  seatNumber: number;
  capacity: number;
  price: number;
  description: string;
  bookings: Booking[];
}

export interface Booking {
  from: string;
  to: string;
}

export interface Coworking {
  id: string;
  name: string;
  address: string;
  owner: string;
  description: string;
  seats: Seat_Core[];
}

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

export interface CreateUpdateCoworkingRequest {
  address: string;
  name: string;
  description: string;
  owner: string;
  longitude: number;
  latitude: number;
  seats: CreateSeatRequest[];
}

export interface CreateSeatRequest {
  type: "WORKPLACE" | "MEETING_ROOM" | "CONFERENCE_ROOM";
  seatNumber: number;
  capacity: number;
  price: number;
  description: string;
}

export interface CreateBookingRequest {
  phoneNumber: string;
  seatNumber: number;
  fromDatetime: string;
  toDatetime: string;
}

export interface SearchCoworkingParams {
  id?: string;
  name?: string;
  types?: ("WORKPLACE" | "MEETING_ROOM" | "CONFERENCE_ROOM")[];
  priceFrom?: number;
  priceTo?: number;
  capacity?: number;
  availableAt?: string;
  page?: number;
  size?: number;
  sort?: string[];
}

export class CoreServiceAPI {
  private instance = axios.create({
    baseURL: import.meta.env.VITE_CORE_API,
    timeout: 5000,
  });

  /** Получить коворкинг по ID */
  async getCoworking(id: string): Promise<Coworking> {
    const response = await this.instance.get<Coworking>(`/coworking/${id}`);
    return response.data;
  }

  /** Обновить коворкинг по ID */
  async updateCoworking(
    id: string,
    data: CreateUpdateCoworkingRequest,
  ): Promise<void> {
    await this.instance.put(`/coworking/${id}`, data);
  }

  /** Найти коворкинги с параметрами */
  async searchCoworkings(
    params: SearchCoworkingParams,
  ): Promise<SearchCoworkingResponse> {
    const response = await this.instance.get<SearchCoworkingResponse>(
      `/coworking`,
      { params },
    );
    return response.data;
  }

  /** Создать новый коворкинг */
  async createCoworking(
    data: CreateUpdateCoworkingRequest,
  ): Promise<Coworking> {
    const response = await this.instance.post<Coworking>(`/coworking`, data);
    return response.data;
  }

  /** Удалить коворкинг по ID */
  async deleteCoworking(id: string): Promise<void> {
    await this.instance.delete(`/coworking/${id}`);
  }

  /** Получить информацию о месте по ID */
  async getSeatById(id: string): Promise<Seat_Core> {
    const response = await this.instance.get<Seat_Core>(`/seat/${id}`);
    return response.data;
  }

  /** Получить бронирование места по ID и дате */
  async getSeatBooking(
    id: string,
    from: string,
    to: string,
  ): Promise<Booking[]> {
    const response = await this.instance.get<Booking[]>(`/seat/${id}/booking`, {
      params: { from, to },
    });
    return response.data;
  }

  /** Забронировать место */
  async bookSeat(
    id: string,
    bookingData: CreateBookingRequest,
  ): Promise<Seat_Core> {
    const response = await this.instance.post<Seat_Core>(
      `/seat/${id}/booking`,
      bookingData,
    );
    return response.data;
  }
}
