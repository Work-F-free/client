import { CoworkingConfig } from "@/feature/coworking-config";
import { PlanView } from "@/feature/plane";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <PlanView />
    </section>
  );
};

export default Coworking;
