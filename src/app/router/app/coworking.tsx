import { useMemo } from "react";
import { useParams } from "react-router-dom";

import {
  CoworkingConfig,
  TEditCoworkigShema,
} from "@/feature/coworking-config";
import { PlanView } from "@/feature/plane";
import { TPlane } from "@/feature/plane/type/type";
import { Button } from "@/components/ui/button";
import { UpdateImage } from "@/feature/coworking-config/ui/update-image";

const Coworking = () => {
  const { action } = useParams<{ action?: string }>();

  const initialPlane = useMemo<TPlane>(() => {
    if (action === "new") {
      return { id: "", background: "", seats: [] };
    }
    return {
      id: `${action}`,
      background: "",
      seats: [
        {
          seat_n: "1",
          type: "WORKPLACE",
          color: "#ef4444",
          coord_x: 100,
          coord_y: 100,
          capacity: 1,
          price: 500,
        },
        {
          seat_n: "2",
          type: "MEETING_ROOM",
          color: "#22c55e",
          coord_x: 200,
          coord_y: 200,
          capacity: 4,
          price: 2000,
        },
      ],
    };
  }, [action]);

  const initalData = useMemo<TEditCoworkigShema>(() => {
    if (action === "new") {
      return {
        name_coworking: "",
        address: "",
        description: "",
      };
    }

    return {
      name_coworking: `Название ковворкинга №${action}`,
      address: `Адресс №${action}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis maiores optio incidunt ducimus, eveniet autem illo assumenda etur illum, incidunt numquam dolorem veniam esse exercitationem rerum temporibus?st fugit. Consequun",
    };
  }, [action]);

  /* СКРЫТАЯ ВКУСНЯХА */

  // const [initialPlane, setInitialPlane] = useState<TPlane | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (action === "new") {
  //       setInitialPlane({
  //         id: "",
  //         background: "",
  //         seats: [],
  //       });
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       setLoading(true);
  //       const response = await fetch(`/api/coworking/${action}`); // Замените на свой API
  //       const data: TPlane = await response.json();
  //       setInitialPlane(data);
  //     } catch (error) {
  //       console.error("Ошибка загрузки данных:", error);
  //       setInitialPlane({
  //         id: `${action}`,
  //         background: "",
  //         seats: [],
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [action]);

  // if (loading) {
  //   return <p>Загрузка...</p>;
  // }

  // if (!initialPlane) {
  //   return <p>Ошибка загрузки данных.</p>;
  // }

  return (
    <section className="flex flex-col gap-6">
      <UpdateImage
        imageData={null}
        onUpdate={(file) => {
          console.log("Новый файл:", file);
        }}
      />

      <CoworkingConfig initalData={initalData} />
      <PlanView key={action} mode={"editor"} initalPlane={initialPlane} />

      <div className="w-full h-[1px] bg-gray-200"></div>

      <Button>{action === "new" ? "Добваить" : "Обновить"}</Button>
    </section>
  );
};

export default Coworking;
