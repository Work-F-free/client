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
      capacity: 1,
      price: 500,
    },
    {
      seat_n: "2",
      type: "meeting_room",
      color: "#22c55e",
      coord_x: 200,
      coord_y: 200,
      capacity: 4,
      price: 2000,
    },
  ],
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
      <div className="h-48 w-full bg-gray-300 flex flex-col items-center justify-center rounded">
        <p>Фото ковворикнга тут будет и его можно поменять</p>
      </div>

      <CoworkingConfig />
      <PlanView mode={"editor"} initalPlane={examplePlanCleint} />
    </section>
  );
};

export default Coworking;
