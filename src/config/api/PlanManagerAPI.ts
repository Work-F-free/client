import axios from "axios";

export interface Seat_Plane {
  id: string;
  color: string;
  coord_x: number;
  coord_y: number;
  number_seat: string;
  type: string;
}

export interface Plan_Manager {
  id: string;
  background: string;
  seats: Seat_Plane[];
}

export interface ErrorResponse_Manager {
  code: number;
  error: string;
  details?: Record<string, unknown>; // Заменил `any` на строгий Record
}

export interface SuccessResponse_Manager<T> {
  data?: T;
  message: string;
  status: number;
}

export class PlanManagerAPI {
  private instance = axios.create({
    baseURL: import.meta.env.VITE_PLANE_MANAGER,
    timeout: 5000,
  });

  /** Получить все планы */
  async getAllPlans(): Promise<Plan_Manager[]> {
    const response = await this.instance.get<Plan_Manager[]>("/");
    return response.data;
  }

  /** Получить один план по ID */
  async getPlan(planId: string): Promise<Plan_Manager> {
    const response = await this.instance.get<Plan_Manager>(`/${planId}`);
    return response.data;
  }

  /** Создать новый план */
  async createPlan(
    planData: Plan_Manager,
  ): Promise<SuccessResponse_Manager<Plan_Manager>> {
    const response = await this.instance.post<
      SuccessResponse_Manager<Plan_Manager>
    >("/", planData);
    return response.data;
  }

  /** Обновить план по ID */
  async updatePlan(
    planId: string,
    planData: Plan_Manager,
  ): Promise<SuccessResponse_Manager<null>> {
    const response = await this.instance.put<SuccessResponse_Manager<null>>(
      `/${planId}`,
      planData,
    );
    return response.data;
  }

  /** Удалить план по ID */
  async deletePlan(planId: string): Promise<SuccessResponse_Manager<null>> {
    const response = await this.instance.delete<SuccessResponse_Manager<null>>(
      `/${planId}`,
    );
    return response.data;
  }

  /** Получить все места (seats) в плане */
  async getSeats(planId: string): Promise<Seat_Plane[]> {
    const response = await this.instance.get<Seat_Plane[]>(`/seat/${planId}`);
    return response.data;
  }

  /** Получить одно место (seat) по ID */
  async getSeat(seatId: string): Promise<Seat_Plane> {
    const response = await this.instance.get<Seat_Plane>(`/seat/${seatId}`);
    return response.data;
  }

  /** Создать новое место в плане */
  async createSeat(
    planId: string,
    seatData: Seat_Plane,
  ): Promise<SuccessResponse_Manager<Seat_Plane>> {
    const response = await this.instance.post<
      SuccessResponse_Manager<Seat_Plane>
    >(`/seat/${planId}`, seatData);
    return response.data;
  }

  /** Обновить место (seat) */
  async updateSeat(
    planId: string,
    seatData: Seat_Plane,
  ): Promise<SuccessResponse_Manager<null>> {
    const response = await this.instance.put<SuccessResponse_Manager<null>>(
      `/seat/${planId}`,
      seatData,
    );
    return response.data;
  }

  /** Удалить место (seat) */
  async deleteSeat(seatId: string): Promise<SuccessResponse_Manager<null>> {
    const response = await this.instance.delete<SuccessResponse_Manager<null>>(
      `/seat/${seatId}`,
    );
    return response.data;
  }
}
