import { useState, useCallback } from "react";
import { TPlane, TSeat } from "../type/type";
import { savePlan } from "../api/save-plane";

export const usePlane = (initalPlane: TPlane) => {
  const [plane, setPlane] = useState<TPlane>(initalPlane);

  const addSeat = useCallback((seat: TSeat) => {
    setPlane((prevPlan) => ({
      ...prevPlan,
      seats: [...prevPlan.seats, seat],
    }));
  }, []);

  const updateSeat = useCallback(
    (seatId: number, updatedSeat: Partial<TSeat>) => {
      setPlane((prevPlan) => ({
        ...prevPlan,
        seats: prevPlan.seats.map((seat) =>
          seat.seat_n === seatId ? { ...seat, ...updatedSeat } : seat,
        ),
      }));
    },
    [],
  );

  const setPlanBackground = useCallback((background: string) => {
    setPlane((prevPlan) => ({
      ...prevPlan,
      background,
    }));
  }, []);

  const savePlanToServer = useCallback(async () => {
    await savePlan(plane);
  }, [plane]);

  const removeSeat = useCallback((seatId: number) => {
    setPlane((prevPlan) => ({
      ...prevPlan,
      seats: prevPlan.seats.filter((seat) => seat.seat_n !== seatId),
    }));
  }, []);

  return {
    plane,
    addSeat,
    updateSeat,
    setPlanBackground,
    savePlanToServer,
    removeSeat,
  };
};
