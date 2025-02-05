import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { CoworkingConfig } from "@/feature/coworking-config";
import { PlanView } from "@/feature/plane";
import { TPlane } from "@/feature/plane/type/type";

const examplePlanCleint: TPlane = {
  id: "1",
  background: "",
  seats: [
    {
      seat_n: "1",
      type: "workplace",
      color: "#ef4444",
      coord_x: 100,
      coord_y: 100,
      capasity: 1,
      price: 500,
    },
    {
      seat_n: "2",
      type: "meeting_room",
      color: "#22c55e",
      coord_x: 200,
      coord_y: 200,
      capasity: 4,
      price: 2000,
    },
  ],
};

const examplePlaneEditor: TPlane = {
  id: "new",
  background: "",
  seats: [],
};

const Coworking = () => {
  const { action } = useParams<{ action?: string }>();

  useEffect(() => {
    if (action !== "new") {
      console.log("летит запрос");
    }
  }, [action]);

  return (
    <section className="flex flex-col gap-6">
      <CoworkingConfig />
      <PlanView mode={"client"} initalPlane={examplePlanCleint} />
    </section>
  );
};

export default Coworking;
